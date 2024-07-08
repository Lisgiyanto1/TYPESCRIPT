describe('Interfaces', () => {
    /* Disini saya akan membuat sebuah interface inharitance dengan key implements */

    interface Hashname{
        name : string;
    }

    interface canSayHello{
        sayHello(name : string) : void;
    }

    class Person implements Hashname, canSayHello {
        name : string;

        constructor(name : string){
            this.name = name;
        }

        sayHello(name: string): void {
            console.info(`Hello ${name}, saya ${this.name}`);
        }
    }
  it('should support interfaces inharitance', ()=>{
    const person : Person = new Person("Aan");
    person.sayHello('kiam')
  });
})
