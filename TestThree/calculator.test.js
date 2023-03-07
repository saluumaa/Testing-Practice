const Calculator = require('./calculator.js');

describe('calculator', ()=>{
    describe('add', ()=>{
        test('add two numbers',()=>{
            const calc = new Calculator
            expect(calc.add(0,2)).toBe(2)
        });
        test('add two numbers',()=>{
            const calc = new Calculator
            expect(calc.add(8,2)).toBe(10)
        });
        test('add two numbers',()=>{
            const calc = new Calculator
            expect(calc.add(-2,4)).toBe(2)
        })
    })

    describe('subtract', ()=>{
        test('subtract two numbers',()=>{
            const calc = new Calculator
            expect(calc.subtract(0,2)).toBe(-2)
        });
        test('subtract two numbers',()=>{
            const calc = new Calculator
            expect(calc.subtract(8,2)).toBe(6)
        });
        test('subtract two numbers',()=>{
            const calc = new Calculator
            expect(calc.subtract(-2,-4)).toBe(2)
        })
    })

    describe('Multiply', ()=>{
        test('multiply two numbers',()=>{
            const calc = new Calculator
            expect(calc.multiply(0,2)).toBe(0)
        });
        test('multiply two numbers',()=>{
            const calc = new Calculator
            expect(calc.multiply(8,2)).toBe(16)
        });
        test('add two numbers',()=>{
            const calc = new Calculator
            expect(calc.multiply(-2,4)).toBe(-8)
        })
    })

    describe('Division', ()=>{
        test('divide two numbers',()=>{
            const calc = new Calculator
            expect(calc.divide(0,2)).toBe(0)
        });
        test('divide two numbers',()=>{
            const calc = new Calculator
            expect(calc.divide(8,2)).toBe(4)
        });
        test('divide two numbers',()=>{
            const calc = new Calculator
            expect(calc.divide(-2,4)).toBe(-0.5)
        })
    })

})