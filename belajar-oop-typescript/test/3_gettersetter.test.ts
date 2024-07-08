describe('Getter and Setter', () => {
    class Category{
        _name?: string;

        get name() : string{
            if(this._name){
               return this._name;
            } else{
                return "empty";
            }
        }

        set name(value : string){
            if(value !== ""){
                this._name = value;
            }
        }
    }
  it('should create getter and setter', ()=>{
    const c : Category = new Category();
    c.name = "Budi";
    console.info(c.name);
    c.name = ""; 
    console.info(c.name); // output akan tetap budi sesuai dengan validasi set diatas

    c.name = "Aan";
    console.info(c.name);
  });
})
