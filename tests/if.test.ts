describe('If Statement', () => {
  it('should support in typesript', ()=>{
     const exampValue = 90;

     if(exampValue > 80){
        console.info('Great Bro');
     } else if(exampValue > 60){
        console.info('Good')
     } else{
        console.info('Keep Learning bro');
     }
  });
  /* Tenary Operator */
  it('should support tenary operator', ()=>{
    const nilai = 80;
    const say = nilai >= 80 ? "Congratulation Your Passed" : "Keep Learning and to be the passed";
    console.info(say);
  });
  /* Switch Statement */
  it('should support in typescript', ()=> {
    function ucapan(name : string){
        switch(name){
            case  "Eko":
                return "Hello Eko";
            case "Budi":
                return "Hello budi";
            default:
                return "Hello Everyone";
        }
    }
    console.info(ucapan("Budi"));
    console.info(ucapan("Eko"));
    console.info(ucapan("Ana"));

  });
})
