describe('Function', () => {
  it('should support in typescript', function () {
    function withType(name: string): string {
      return `Hello ${name}`;
    }

    expect(withType("Aan")).toBe("Hello Aan");

  });

  /* Function Parameter
    1. Mendukung default value
    2. Mendukung Rest Paramter
    3. Optional Paramter
  */

  //1
  it('should support default value', function () {
    function withType(name: string = 'Guest'): string {
      return `Hello ${name}`;
    }
    expect(withType()).toBe("Hello Guest");
    expect(withType("Aan")).toBe("Hello Aan");
  });

  //2
  it('should support rest parameter', function(){
    function sum(...values: number[]): number{
      let total = 0;
      for (const value of values){
        total += value;
      }
    return total;
    }
    expect(sum(1,2,3,4,5)).toBe(15);
  });
  //3
  it('should support optional parameter', function(){
    function peopleName(firstname : string, lastname? : string): string{
      if(lastname){
        return `Hello ${firstname} ${lastname}`;
      }else{
        return `Hello ${firstname}`;
      }
     
    }
  
    expect(peopleName("Lisgiyanto")).toBe("Hello Lisgiyanto");

  });


  /* Function Overloading */
  it('should support function overloading', function(){
    function callMe(value : number): number;
    function callMe(value : string): string;
    function callMe(value : any): any{
      if (typeof value === "number"){
        return value * 10;
      }else if(typeof value === "string"){
        return value.toUpperCase();
      }
    }
    expect(callMe(10)).toBe(100);
    expect(callMe("aan")).toBe("AAN");
  });
});
