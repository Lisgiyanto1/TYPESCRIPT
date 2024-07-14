import { Hp, multipleGeneric2, multipleGeneric3 } from "../src/multiple-generic";

describe('Multiple Generic', () => {
    it('should create multiple generic', () => {
        const _d = new multipleGeneric2(1, "aan");
        expect(_d.key).toBe(1);
        expect(_d.value).toBe("aan")
        const _e = new multipleGeneric3(2, "Kiam", "Pati");
        expect(_e.third).toBe("Pati");
    });
    it('should optional generic paramater', () => {
        const simple = new Hp();
        simple.sayHello("aan");
        // expect(simple.getValue()!.toUpperCase()).toBe("AAN"); upper case akan error
        /* sebab tipe data bersifat any yang membuat uppercase tidak bisa membaca 
        yang spesifik string, maka dari itu akan sedikit lebih berbahaya karena generic
        dapat menerima tipe data  apapun rawan akan manipulation
        */
    

        
    });
})
