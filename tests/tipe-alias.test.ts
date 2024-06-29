import { Category, Product } from "../src/tipe-alias";

describe('Type Alias', function(){
    it('should support in typescript', function(){
        const category : Category={
            id : '1',//bisa string/number sesuai dengan setting parameter type alias
            name : 'handphone'
        };

        const product : Product = {
            id : 1,
            name : 'Samsung A1',
            harga: 1000000,
            category : category
        };

        console.info(product);
        console.info(category);
    });
});