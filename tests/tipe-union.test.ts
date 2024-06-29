// tests/tipe-union.test.ts

describe('Type Union Test', function () {
  it('should support union types in TypeScript', function () {
    let sample: number | string | boolean = 'aan';

    sample = 22;
    console.info(sample);  // This will print 22

    sample = true;
    console.info(sample);  // This will print true
    //union serupa  dengan any akan tetapu union lebih mengutamakan pilihan tipe data yang akan digunakan dengan jelas.
  });


  //kemudian perlu adanya pengecekan tipe data dengan type of untuk menghindari penggunaan method yang tidak support dengan salah satu tipe data.
  it('should support typeof type checks', function () {
    function process(value: number | string | boolean) {
      if (typeof value === 'string') {
        return value.toUpperCase();
      } else if (typeof value === 'number') {
        return value + 2;
      } else {
        return !value;
      }
    }

    expect(process("Aan")).toBe("AAN");
    expect(process(100)).toBe(102);
    expect(process(true)).toBe(false);
  });
});
