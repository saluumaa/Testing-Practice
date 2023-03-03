const capitalize = require('./capitalize.js');

test('Capitalize first letter', ()=>{
    expect(capitalize("asma")).toBe("Asma");
    expect(() => capitalize(12345)).toThrow 
    ('value must be a string')
})