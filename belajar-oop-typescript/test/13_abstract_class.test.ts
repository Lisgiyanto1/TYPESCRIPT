describe('Abstract Class', () => {
    abstract class Customer {
        readonly id: number;
        abstract name: string
        constructor(id: number) {
            this.id = id;
        }

        abstract sayHello(name: string): void;
    }


    class regularCustomer extends Customer {
        name : string;

        constructor(name : string, id : number){
            super(id);
            this.name = name;

        }

        sayHello(name: string): void {
            console.info( `Hello ${name}, my name is ${this.name}`);
        }
    }    

    it('should create asbstract class', () => {
        const c = new  regularCustomer("Aan", 1);
        c.sayHello("Budi");
    });
})
