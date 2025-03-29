import { isEven, isOdd } from '../src/utils';

describe('utils', () => {
    describe('isEven', () => {
        test('should return true for even numbers', () => {
            expect(isEven(2)).toBe(true);
        });

        test('should return false for odd numbers', () => {
            expect(isEven(3)).toBe(false);
        });
    });

    describe('isOdd', () => {
        test('should return true for odd numbers', () => {
            expect(isOdd(3)).toBe(true);
        });

        test('should return false for even numbers', () => {
            expect(isOdd(2)).toBe(false);
        });
    });
});
