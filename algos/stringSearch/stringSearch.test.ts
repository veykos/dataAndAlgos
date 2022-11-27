import stringSearch from "./stringSearch";

describe('String Search should ', () => {
    test('Return 1 if string contains a substring once', () => {
        expect(stringSearch('abc', 'a')).toBe(1);
    })
    test('Return 1 if string contains a substring in middle of the string', () => {
        expect(stringSearch('abc', 'b')).toBe(1);
    })
    test('Return 1 if string contains a substring longer than 1 character in middle of the string', () => {
        expect(stringSearch('abcd', 'bc')).toBe(1);
    })
    test('Return 1 if string contains a substring longer than 1 character and string has spaces', () => {
        expect(stringSearch('a bc d', 'bc')).toBe(1);
    })
    test('Return 2 if string contains a substring twice', () => {
        expect(stringSearch('a bc dbc', 'bc')).toBe(2);
    })
    test('Return 2 if string contains a substring twice', () => {
        expect(stringSearch('a bc dbc asd', 'bc')).toBe(2);
    })
    test('Return 3 if string contains a substring thrice', () => {
        expect(stringSearch('omg pls help zomg omg hes on fire', 'omg')).toBe(3);
    })
    test('Return 0 if string doesnt contain substring', () => {
        expect(stringSearch('omg pls help zomg omg hes on fire', 'ong')).toBe(0);
    })
    
})