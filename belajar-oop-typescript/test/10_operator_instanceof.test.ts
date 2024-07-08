/* paramater instanceof atau parameter operaator adalah menuliskan properties pada 
paramter constructor
*/
describe('Parameter Instanceof', () => {
    class Person {
        constructor(public name: string) { //agar otomatis dianggap properties maka berikan public

        }
    }
    it('should create parameter instanceof', () => {
        const person = new Person("Aan");
        console.info(person);
    })
})
