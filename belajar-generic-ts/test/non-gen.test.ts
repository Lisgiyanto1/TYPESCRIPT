import { nonGen } from "../src/non-generic-class"

describe('Class Non Generic', () => {
    it('should create class generic', () => {
        const data = new nonGen(123);

        data.value = true;
        data.value = "aan";

        console.info(data);
    })
})
