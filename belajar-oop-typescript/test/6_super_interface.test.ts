describe('Super Interface', () => {
    class Person {
        name: string;

        constructor(name: string) {
            this.name = name;
        }
    }

    class Employe extends Person {
        department: string;
        constructor(name: string, department: string) {
            super(name);
            this.department = department;
        }
    }
    it('should support super interfaces', () => {
        const employe = new Employe("Aan", "Sales");
        console.info(employe);
    });
})


/* Kesimpulan
penggunaan super pada constructor turunan dapat meraih warisan isi dari constructor pewaris*/