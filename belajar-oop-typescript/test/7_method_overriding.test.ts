describe('Method Overriding', () => {
    class Employee{
        name : string;
        constructor(name : string){
            this.name = name;
        }

        sayHello(name : string) : void{
            console.info(`Hello ${name} from ${this.name}`);
        }
    }

    class Manager extends Employee{
        sayHello(name: string): void {
            console.info(`Hello ${name}, from ${this.name} your manager`)
        }
    }
    it('should create method overriding', ()=>{
        const employee = new Employee("Aan");
        console.info(employee);
        employee.sayHello("Doni");
    
        const manager = new Manager("Budi");
        console.info(manager);
        manager.sayHello("Kiam");
    })
})
/* Kesimpulan :
penggunaan method overriding memungkinkan anda untuk mengimplementasikan
pengulangan penggunaan suatu method akan tetapi dengan fungsi/keperluan yang berbeda.
*/
