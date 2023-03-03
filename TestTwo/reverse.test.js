const reverseString = require('./reverse.js');

test("check reversed string", ()=>{
    expect(reverseString('Salma')).toBe('amlaS');
    expect(reverseString('1234')).toBe('4321')
})