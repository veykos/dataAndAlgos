import permAlone from "./permAlone";

//Return the number of total permutations of the provided string that don't
// have repeated consecutive letters. Assume that all characters in the
// provided string are each unique.



describe('permAlone should', () => {
    test('Be defined and be a function', () => {
        expect(typeof permAlone).toBe('function')
    })
    test('function should return a number', () => {
        expect(typeof permAlone('asd')).toBe('number')
    })
    test('should return proper result with simple string', () => {
        expect(permAlone('aab')).toBe(2)
    })
    test('should return 0 if no possible permutation without consecutive duplicates', () => {
        expect(permAlone('abaa')).toBe(0)
    })
    test('should return 1 if string length is 1', () => {
        expect(permAlone('a')).toBe(1)
    })
})