describe('Error Handling', () => {
    class ValidationError extends Error {
        constructor(public message: string) {
            super(message);
        }
    }
    function doubleIt(value: number): number | string {
        if (value < 1) {
            throw new ValidationError("value cannot be less than 0")
        } else {
            return `bilangan yang anda masukan ${value} berhasil`;
        }


    }
    it('should create error handling', () => {
        try {
            const r = doubleIt(1);
            console.info(r);
        } catch (e) {
            if (e instanceof ValidationError) {
                console.info(e.message);
            }
        }
    })
})
