
const stringLength = require('./stringLength');

test("Check string length", ()=>{
    expect(stringLength("hello")).toBe(5);
    expect(stringLength("how you do")).toBe(10)
    expect(()=> stringLength('12345178255')).toThrow
    ('String length should not greater than 10 character');
})