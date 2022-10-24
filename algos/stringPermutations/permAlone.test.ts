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
})