"use strict";
describe('Type Array', function () {
    it('should try same javascript', function () {
        const mahasiswa = ['Aan', 'Sofiyan'];
        const no_Abs = [1, 2, 3, 4];
        console.info(mahasiswa);
        console.info(no_Abs);
    });
    //in typscript memiliki fitur Readonly dalam array dimana value tidak dapat diubah.
    it('should create readonly array', function () {
        const hobbies = ['Makan', 'Ngoding'];
        console.info(hobbies);
        console.info(hobbies[0]);
        console.info(hobbies[1]);
        //misal kita manipulasi
        /*  hobbies[0] = ['Olahraga']; */
        //maka akan error sebab array diatas kita set sebagai readonly array.
    });
    it('should create Tuple', function () {
        const food = ['Aan', 'TI3A', 15];
        console.info(food);
        console.info(food[0]);
        console.info(food[2]);
        //coba manipulasi  pasti akan error sebeb dia readonly
    });
});
