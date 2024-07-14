export class multipleGeneric2<J, K> {
    constructor(public key: J, public value: K) {

    }
}
export class multipleGeneric3<L, M, N> {
    constructor(public key: L, public value: M, public third: N) {

    }
}

/* misal kta ingin menggunakan generi class 
tanpa parameter constructor adalah : */
export class Hp<Y> {
    private value?: Y;
    sayHello(value: Y) {
        this.value = value;
    }

    getValue(): Y | undefined {
        return this.value;
    }

}

/* kemudian ada juga generic paramater default dimana pada generic class 
        yang sudah ditentukan misalnya <T> , maka jika diberi paramter default akan
        menjadi <T> = string/number/boolen/[] , tergantung parameter default apa
        yang anda perlukan.

        contoh kode 
        export class Hp<Y> = string/any { disini letak parameter default
        private value?: Y; 
        sayHello(value: Y) {
        this.value = value;
        }

        getValue(): Y | undefined {
        return this.value;
        }

}
        
        */

