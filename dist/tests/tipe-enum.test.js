import { customerType } from "../src/tipe-enum";
describe('Type Enum', function () {
    it('should support in typescript', function () {
        const customer = {
            id: 1,
            name: 'Aan',
            hobbies: ['makan', 'teknologi'],
            type: customerType.GOLD
        };
        console.info(customer);
    });
});
