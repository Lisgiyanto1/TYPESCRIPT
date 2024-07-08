/* didalam sini saya akan menjelaskan bagaimana membuat sebuah kelas dimana akan saya berikan 
penjelasan mengenai objek, cunstoctor/method
*/

describe('Class', () => {
    class Customer {
        constructor() {
            console.info("create new customer");
        }
    }
    it('should can create class', () => {
      /*   const customer : Customer = new Customer(); //objek
      */
    });
    it('should can create cunstructor', () => {
        new Customer(); //memanggil di luar testing lain
        new Customer();
    });
});



