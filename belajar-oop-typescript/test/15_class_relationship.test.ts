describe('Class Relationship', () => {
    class Orang {
         
        constructor(public name: string) {
            
        }
    }
    class Karyawan {
        constructor(public name: string) {

        }

        sapaAnda(name: string): void {
            const p = new Orang("Aan")
            console.info(`halo ${name} anda adalah ${this.name} dari ${p.name}`)
        }

    }

    it('should create relationship class', () => {

        const k = new Karyawan("Manager");
        k.sapaAnda("Pakde")

        console.info(k);
    })
})
