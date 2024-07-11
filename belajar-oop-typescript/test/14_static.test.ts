describe('Static', () => {
    class Static {
        /* static properties 
        ia akan besifat global seakan akan membuat variable global
        yang dapat diakses seluruh file ekternal.
        */
        /*  static n: string = 'AAn';
         static age: number = 2; */
        /* static method */

        static jumAku(...j: number[]): number {
            let a = 0;
            for (let value of j) {
                a += value;
            }
            return a;
        }

    }

    it('should create static', () => {
        console.info(Static.jumAku(1, 2, 3, 4))
    });
})
