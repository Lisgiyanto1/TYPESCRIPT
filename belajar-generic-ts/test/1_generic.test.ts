import { Generic } from "../src/generic-class"

 describe('Generic Class', () => {
    it('should create generic class', ()=>{
        const data = new Generic<number>(123);
        expect(data.value).toBe(123);
        console.info(data );
        const n = new Generic<string>("aan");
        const firstname  = n.value.substring(0,3);
        expect(firstname).toBe("aan");
    })
 })
 