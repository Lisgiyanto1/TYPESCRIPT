describe('Function', () => {
  it('should support in typescript', function(){
    function withType(name : string): string {
        return `Hello ${name}`;
    }

    expect(withType("Aan")).toBe("Hello Aan");

  });
});
