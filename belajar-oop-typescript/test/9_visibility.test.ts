describe('Visibility', () => {
    /* visibility terdiri dari public , private, protected. terdapat pada  class, properties atau
    atapun method
    */
    class Person {
        // private counter = 0;
        protected counter = 0;
        public increment() {
            this.counter++;
        }
    }
    class doublePerson extends Person {
        public doubleIncrement() {
            this.counter += 2;
        }
    }
    it('should create visibility', () => {
        const person = new doublePerson();
        person.doubleIncrement();
        person.increment();
        person.doubleIncrement();
        console.info(person);
    });
})

/* Kesimpulan :
perbedaan private dan protected terletak pada hak akses properties dalam suatu class.
jika suatu properties dapat diturunkan di class lain maka harus diset ke protected atau public
jika ingin diakses di class itu saja maka set ke private
*/
