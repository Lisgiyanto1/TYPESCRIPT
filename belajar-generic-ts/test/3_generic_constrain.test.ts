describe('Generic Constrain', () => {
    interface Karywan {
        id: number;
        name: string;
    }

    interface Manajer extends Karywan {
        totkarywan: number;
    }

    interface VP extends Manajer {
        totManj: number;
    }

    class dataCompany<A extends Karywan> {
        constructor(public karywan: A) {

        }
    }

    it('should create generic constrain', () => {
        const _a = new dataCompany<Karywan>({
            id: 1,
            name: "axel"
        });

        const _b = new dataCompany<Manajer>({
            id: 2,
            name: "sofiyan",
            totkarywan: 20
        });

        const _c = new dataCompany<VP>({
            id: 3,
            name: "aan",
            totkarywan: 20,
            totManj: 3
        });

        console.info(_a, _b, _c);
    });
})



