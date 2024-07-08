describe('Properties', () => {
    class Customer {
        //1.properties daapat bersifat 3 yaitu mandatory(value wajib diisi), readonly(hanya dapat dibaca), dan optional.
        //serta dapat kita setting dengan default value
        readonly id: number; //readonly mandatory
        name: string; //mandatory = misal mau set defauly value maka menjadi name : string = "Guest";
        age?: number; //optional

        constructor(id: number, name: string) {//harus disertakan detail parameter
            this.id = id;
            this.name = name;
        }

        /* 2. Method */
        sayHello(name: string): void {
            console.info(`hello ${name} selamat belajar, from ${this.name}`);
        }
    }


    it('should create properties', () => {
        const customer: Customer = new Customer(1, "Aan");
        customer.age = 22;
        console.info(customer.id);
        console.info(customer.age);
        console.info(customer.name);
        console.info(customer);
    
    });
    it('should create method', ()=>{
        const customer : Customer = new Customer(1, "Sofiyan");
        customer.sayHello("Kiam");
        
    });

})
