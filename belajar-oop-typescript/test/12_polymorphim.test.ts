describe('Polymorphim', () => {
    class Person {
        constructor(public name: string) {
            this.name = name;
        }
    }
    class Employee extends Person {

    }
    class Manager extends Employee {

    }

    it('should create Polymorphim', () => {
        let employee: Person = new Person('Aan');
        console.info(employee);
        employee = new Employee('dedi');
        console.info(employee);
        employee = new Manager('doni');
        console.info(employee);
    });
})
