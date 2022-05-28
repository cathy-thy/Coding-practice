namespace restpara
{
    function test(num1:number, num2:number, ...values:number[])
    {
        let result = num1+num2;
        for (let value of values)
        {
            result+=value;
        }
        return result;
    }

    console.log(test(1,2,3,4,5,6,7,8,9,10))
}