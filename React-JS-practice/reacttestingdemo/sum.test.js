import sum from "./sum"
//-----all test cases for sum.js
let a;
describe ("Test Suite to Test Summation Functionality", () => {
    //----------------------
    beforeAll(()=>{
        console.log('beforeAll is executed once before the execution of all test cases')
    });

    //----------------------
    beforeEach(()=>{
        console.log('beforeEach is executed once before the execution of each test case')
    });

    //--------Test 1--------
    test("Test sum returns 5 + 0 = 5", ()=>{
        expect(sum(5,0)).toBe(5);
    });

    //--------Test 2--------
    it.skipp("Test sum returns 0 + 0 = 0", ()=>{
        expect(sum(0,0)).toBe(0);
    })

    //--------Test 3--------
    test("Test sum returns -8 - 5 = -13", ()=>{
        expect(sum(-5,-8)).toBe(-13);
    })

    //--------Test 4--------
    test("Test sum returns 8 + 5 = 13", ()=>{
        expect(sum(8,5)).toBe(13);
    })

    afterAll(()=>{
        console.log('afterAll is executed once after the execution of all test cases')
    });

    //----------------------
    afterEach(()=>{
        console.log('afterEach is executed once after the execution of each test case')
    });
})