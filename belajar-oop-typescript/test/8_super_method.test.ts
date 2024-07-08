describe('Super Method', () => {
    class Employee{
        name : string;
        constructor(name :string){
            this.name = name;
        }

        sayHello(name :  string): void{
            console.info(`Hello ${name}, from ${this.name}`);
        }
    }

    class Manager extends Employee {
        sayHello(name: string): void {
            super.sayHello(name);
            console.info("and me is your manager");
        }

    }
    
    it('should create super method', () => {
        const employee = new Employee("Aan");
        employee.sayHello("Kiam");
        console.info(employee);

        const manager = new Manager("Doni");
        manager.sayHello("Aan");
        console.info(manager);
    });
})
