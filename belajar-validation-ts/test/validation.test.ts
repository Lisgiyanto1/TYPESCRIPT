import { NEVER, object, RefinementCtx, string, z, ZodError } from "zod";

describe('zod', () => {
    it('should create validation', () => {
        const schema = z.string().min(3).max(100);

        const request = "aan";
        const result = schema.parse(request);
        expect(result).toBe(request);
    });
    it('should create validation type', () => {
        const usernameSchema = z.string().email();
        const isAdminSchema = z.boolean();
        const priceSchema = z.number().min(1000).max(1000000);

        const result_a = usernameSchema.parse("aan@gmail.com");
        console.info(result_a);

        const result_b = isAdminSchema.parse(true);
        console.info(result_b);

        const result_c = priceSchema.parse(1000);
        console.info(result_c);
    });
    it('should create data konvertion ', () => {
        /* di libary zod menyediakan sebuah object yang bernama coerca
        yang dapat mengkonversi inputan secara otomatis ke dalam tipe
        data yang diinginkan program.
        */
        const usernameSchema = z.coerce.string();
        const isAdminSchema = z.coerce.boolean();
        const priceSchema = z.coerce.number().min(1000).max(1000000);

        const result_a = usernameSchema.parse(1000000);
        console.info(result_a);

        const result_b = isAdminSchema.parse("true");
        console.info(result_b);

        const result_c = priceSchema.parse("10000");
        console.info(result_c);
    });
    it('should create date validation ', () => {
        const dateSchema = z.coerce.date().min(new Date(1990, 0, 1)).max(new Date(2020, 0, 1));
        /* penentuan bulan mulai dari 0 , adalah januari jika 1 maka februari */
        const r_date1 = dateSchema.parse("1991-02-01");
        console.info(r_date1);

        const r_date2 = dateSchema.parse(new Date(2019, 1, 32));
        console.info(r_date2);
    });
    /* Validation Error */
    it('should return validation error if invalid ', () => {
        const schema = z.string().email().min(3).max(100);

        try {
            schema.parse('an');
        } catch (err) {
            if (err instanceof ZodError) {
                console.info(err.errors);
            }
        }

    });

    /* Validation Object */
    it('should return validation object', () => {
        const loginSchema = z.object({
            username: z.string().min(5),
            password: z.string().min(6)
        });

        const request = {
            username: "aan@gmail.com",
            password: "qwertyuiop",
            ignore: "ignore"
        }

        const result = loginSchema.parse(request);
        console.info(result);
    });
    /* object didalam object = nested object */
    it('should return validation nested object', () => {
        const usersSchema = z.object({
            name: z.string().min(3),
            gender: z.string(),
            address: z.object({
                city: z.string(),
                street: z.string().min(5),
                region: z.string().min(5)

            })
        });

        const input = {
            name: "aan",
            gender: "L",
            address: {
                city: "Pati",
                street: "Jl Gembong Pati",
                region: "Jawa Tengah"
            }
        }

        const saring = usersSchema.parse(input);
        console.info(saring);
    });
    /* Valdation Collection (Array, map  , set) */
    it('should return validation collection Array', () => {
        const jenisMotor = z.array(
            z.string().email(),
        ).min(2).max(100);

        const request: Array<string> = ['aan@mail.com', 'fiyan@gmail.com'];
        const result: Array<string> = jenisMotor.parse(request);

        console.info(result);

        /* map */
        const employeScame = z.set(
            z.string().email(),

        ).min(1).max(2);

        const reqEmp: Set<string> = new Set(["an1@gmail.com"]);
        const resEmp: Set<string> = employeScame.parse(reqEmp);

        console.info(resEmp);

        /* map */
        const emailSchame = z.map(
            z.number(),
            z.string().email()
        );

        const reqEmail: Map<number, string> = new Map([[1, "an@gmail.com"]]);
        const resEmail: Map<number, string> = emailSchame.parse(reqEmail);

        console.info(resEmail);
    });
    it('should return validation message custome', () => {
        const schema = z.object({
            user: z.string().email('username harus email'),
            pwd: z.string().min(6, 'Password Harus > 6 karakter')
        });
        try {
            const request = { user: 'aan@gmail.com', pwd: '1234567890' }
            const result = schema.parse(request);
            console.info(result);
        } catch (e) {
            console.error(e);
        }
    });
    it('should return optional validation', () => {
        const registerSchema = z.object({
            username: z.string().email('usrname harus email').min(3).max(20),
            firstName: z.string().min(3),
            umur: z.string(),
            lastName: z.string().min(3).optional()
        });
        const request = {
            username: "a@gmail.com",
            firstName: "aan",
            umur: '22'
        }
        const result = registerSchema.parse(request);
        console.info(result);
    });
    it('should return transform data', () => {
        const schema = z.string().transform((data) => {
            return data.toUpperCase().trim()
        });

        const result = schema.parse('aan');
        console.info(result);
    });
    /* custom validation dengan RefirenmentCtx */
    function mustUpperCase(data: string, ctx: RefinementCtx): string {
        if (data != data.toUpperCase()) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "username harus custom"
            })
            return NEVER;
        } else {
            return data;
        }
    }
    it('should return validation custom', () => {
        const d = z.object({
            uid: string(),
            username: z.string().transform(mustUpperCase),
        });

        const request = {
            uid: '1',
            username: 'AAN'
        }

        const r = d.parse(request);

        console.info(r);
    });
})


