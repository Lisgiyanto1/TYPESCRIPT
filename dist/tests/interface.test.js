describe('Interface', function () {
    it('should support in typescript', function () {
        const seller = {
            id: '1',
            name: 'Aan',
            isMale: true,
            nib: 1234567890, // tidak akan bisa diubah karena readonly
            npwp: 123456789, //
        };
        console.info(seller);
        seller.id = '01';
        seller.name = 'Sofiyan';
        console.info(seller);
    });
    /* Funtion Interfaces */
    it('shoulf support interfaces', function () {
        const add = (value1, vlaue2) => {
            return value1 + vlaue2;
        };
        expect(add(2, 2)).toBe(4);
    });
    /* Indexable Interfaces */
    it('should support  indexable interfaces', function () {
        const names = [1, 2, 3];
        console.info(names[0]);
        console.info(names[1]);
        console.info(names[2]);
    });
    /* Interfaces non indexable */
    it('should support interface non indexable', function () {
        const directory = {
            "name": "Aan",
            "address": "Semarang"
        };
        expect(directory["name"]).toBe("Aan");
        expect(directory["address"]).toBe("Semarang");
    });
    it('should support extending interfaces', function () {
        const employe = {
            id: 1,
            name: "Aan",
            city_address: "Semarang"
        };
        const manager = {
            id: 2,
            name: "Aan",
            city_address: "Kudus",
            addNumberEmploye: 101
        };
        console.info(manager);
    });
    it('should support interfaces person', function () {
        const person = {
            name: "Aan",
            sayHello: function (name) {
                return `Halo ${name} saya adalah ${this.name}`;
            }
        };
        console.info(person);
    });
    /* intersection type */
    it('should support intersaction type', function () {
        const domain = {
            id: 1,
            name: 'Aan'
        };
        console.info(domain);
    });
});
export {};
