import { sayHello } from "../src/sayHello";
describe('sayHello', function () {
    it('should return hello aan', function () {
        expect(sayHello('aan')).toBe('Hello aan');
    });
});
