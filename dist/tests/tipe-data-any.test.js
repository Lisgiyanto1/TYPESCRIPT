"use strict";
describe('Type Data Any', function () {
    it('should tipe data any(all)', function () {
        const person = {
            name: 'aan',
            umur: 22
        };
        person.umur = 24;
        console.info(person);
        /* CATATAN : walaupun di typescript  ada tipe data any tapi disarankan
        untuk tidak terlalu banyak menerapkan any seperti di javascript
        sebab typescript lebih mengedepankan keamanan maka tipe data yang jelas
        lebih dianjurkan */
    });
});
