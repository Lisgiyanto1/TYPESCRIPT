describe('Inheritance', () => {
    class Employee{
     name : string;
     id : number;
        constructor(id: number, name: string ) {
            this.id =  id;
            this.name = name;
        }
    }
    class Manager extends Employee {

    }
    class Director extends Manager{

    }
    it('should support', ()=>{
        const employe = new Employee(1, "Aan");
        console.info(employe);

        const manager = new Manager(2, "Budi");
        console.info(manager);

        const director = new Director(3, "Sofiyan");
        console.info(director);
    });
})
