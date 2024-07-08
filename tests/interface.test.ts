import { Employe, Manager } from "../src/employe";
import { Person } from "../src/person";
import { sayHello } from "../src/sayHello";
import { Seller } from "../src/seller";

describe('Interface', function () {

    it('should support in typescript', function () {
        const seller: Seller = {
            id: '1',
            name: 'Aan',
            isMale: true,
            nib: 1234567890, // tidak akan bisa diubah karena readonly
            npwp: 123456789, //
        }

        console.info(seller);

        seller.id = '01';
        seller.name = 'Sofiyan';

        console.info(seller);
    });

    /* Funtion Interfaces */

    it('shoulf support interfaces', function () {
        interface Addfunction {
            (vlaue1: number, vlaue2: number): number;
        }

        const add: Addfunction = (value1: number, vlaue2: number): number => {
            return value1 + vlaue2;
        };

        expect(add(2, 2)).toBe(4);
    });

    /* Indexable Interfaces */

    it('should support  indexable interfaces', function () {
        interface stringArray {
            [value1: number]: number;
        }

        const names: stringArray = [1, 2, 3];
        console.info(names[0]);
        console.info(names[1]);
        console.info(names[2]);
    });

    /* Interfaces non indexable */
    it('should support interface non indexable', function () {
        interface stringBioadata {
            [key: string]: string;
        }

        const directory: stringBioadata = {
            "name": "Aan",
            "address": "Semarang"
        }

        expect(directory["name"]).toBe("Aan");
        expect(directory["address"]).toBe("Semarang");

    });
    it('should support extending interfaces', function () {
        const employe: Employe = {
            id: 1,
            name: "Aan",
            city_address: "Semarang"
        }

        const manager: Manager = {
            id: 2,
            name: "Aan",
            city_address: "Kudus",
            addNumberEmploye: 101
        }

        console.info(manager);

    });
    it('should support interfaces person', function () {
       
        const person: Person = {
            name: "Aan",
            sayHello: function (name: string): string {
                return `Halo ${name} saya adalah ${this.name}`
            }
        }

        console.info(person);
    });
    /* intersection type */
    it('should support intersaction type', function(){
        interface hasId {
            id : number;
        }
        interface hasName {
            name : string;
        }

        type Domain = hasId & hasName;


        const domain : Domain = {
            id : 1,
            name : 'Aan'
        };

        console.info(domain);
    });
    /* Type Assertion */

    it('should support type assertion', function(){
        const person : any = {
            name : "Aan",
            age : 22,
        }

        const person2 :  Person = person as Person;
        console.info(person2);
        
    });
});