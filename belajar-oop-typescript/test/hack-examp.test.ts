describe('Factorial', () => {
    class hitungFactorial {
        factorial(n: number): number {
            if (n == 1 || n == 0) {
                return 1;
            } else {
                let result = 1;
                for (let i = 2; i <= n; i++) {
                    result *= i;
                }
                return result;
            }


        }
    }




    it('should create factorial', () => {
        const f = new hitungFactorial()
        console.info(f.factorial(25));
    })
})
