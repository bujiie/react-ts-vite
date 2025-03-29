import { isEven, isOdd } from '../src/utils';

describe('utils', () => {
    describe('isEven', () => {
        const EVEN = 2;
        const ODD = 3;

        it('should return true for even numbers', () => {
            expect(isEven(EVEN)).toBe(true);
        });

        it('should return false for odd numbers', () => {
            expect(isEven(ODD)).toBe(false);
        });
    });

    describe('isOdd', () => {
        const EVEN = 2;
        const ODD = 3;

        it('should return true for odd numbers', () => {
            expect(isOdd(ODD)).toBe(true);
        });

        it('should return false for even numbers', () => {
            expect(isOdd(EVEN)).toBe(false);
        });
    });
});
