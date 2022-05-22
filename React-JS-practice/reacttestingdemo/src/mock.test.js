
function cgForEach(items, callback)
{
    for (let i = 0; i<items.length; i++)
    {
        callback(items[i])
    }
}

//--------------------
describe ("Test cgForEach Function", ()=>{
    //test the function with this array
    it("Test cgForEach with array of [10,2,0,4]",()=>{
        const mockCallback = jest.fn((num)=>{return (num+100)});
        cgForEach([10,2,0,4], mockCallback);
        expect(mockCallback.mock.calls.length).toBe(4); //will be called 4 times
        
        //test first argument of the first call to the function is 10
        expect(mockCallback.mock.calls[0][0]).toBe(10);
        expect(mockCallback.mock.results[0].value).toBe(110);

    });
});

