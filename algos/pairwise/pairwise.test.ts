import pairwise from "./pairwise";

describe('Function pairwise should', () => {
    test('be defined and of type function', () => {
        expect(typeof pairwise).toBe('function')
    })
    test('works properly with 2 combinations that work', () => {
        expect(pairwise([1, 4, 2, 3, 0, 5], 7)).toBe(11)
    })
    test('works properly when a square of a number also results in the arg', () => {
        expect(pairwise([1, 3, 2, 4], 4)).toBe(1)
    })
})