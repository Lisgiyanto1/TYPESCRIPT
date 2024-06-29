describe('Undefined Type', function(){
    it('should support in typescript', function(){
        function sayHello(name? : string | null){
            name ? console.info(`Hello ${name}`) : console.info('Hello'); 
        }

        sayHello("Eko");
        const name : string | undefined = undefined;
        sayHello(name);
        sayHello(null);
    });
});

/* Catatan jika ingin mengubah ke tipe null maka anda dapat menambah | null pada operation
operator */