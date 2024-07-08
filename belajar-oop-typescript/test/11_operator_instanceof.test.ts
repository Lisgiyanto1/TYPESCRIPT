/* instanceof & typeof */

describe('Operator InstanceOf', () => {
    class Person {

    }
    class Employee extends Person {

    }



    it('should create InstanceOf', () => {
        const budi = new Person();
        const kurdi = new Employee();

        //typeof 
        console.info(typeof budi);
        console.info(typeof kurdi);
        //instanceof
        expect(budi instanceof Person).toBe(true);
        expect(budi instanceof Employee).toBe(false);
    })
})
