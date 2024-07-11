describe('Polymorphim', () => {
    class Person {
        constructor(public name: string) {

        }
    }
    class Employee extends Person {

    }
    class Manager extends Employee {

    }

    /* Method Polymorphim */
    /*  function sayHello(employee : Employee):void {
         console.info(`Hi ${employee.name}`)
     } */
    /* Method Polymorphim with type cast */
    function sayHello(employee: Employee): void {
        if( employee instanceof Manager){
            const e = employee  as Manager;
            console.info(`Hello ${e.name}, your Manager`);
        }else if ( employee instanceof Employee){
            const e = employee as Employee;
            console.info(`hi ${e.name} your employee`);
        }else{
            const p = employee as Person;
            console.info(`Hello ${p.name} your me`)
        }
    }
    it('should create Polymorphim', () => {
        let employee: Person = new Person('Aan');
        console.info(employee);
        employee = new Employee('dedi');
        console.info(employee);
        employee = new Manager('doni');
        console.info(employee);
    });

    it('should support method polymorphim', () => {
        sayHello(new Person("kiam"));
        sayHello(new Employee("irpan"));
        sayHello(new Manager("Aan"));
    });
})
