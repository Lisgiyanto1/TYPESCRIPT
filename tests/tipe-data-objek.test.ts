describe('Object Type', function () {
    it('should support in typescript', function () {
        const person: { id: string, name: string, hobbies?  : string[] } = {
            id: '1',
            name: 'Lisgiyanto',
            hobbies: ['makan', 'ngoding'],
        }
        person.id = '2';
        person.name = 'Aan';
        person.hobbies? person.hobbies[0] = 'olahraga' : 'memasak'; 
        console.info(person);
    });
});



/* catatan bila ingin menambahkan sebuah properties yang optioanl anda dapat 
menambahkan sebuah tanda ? ke dalam nama properties misal = describe? : string
maka pengisian atribute opsional.
*/