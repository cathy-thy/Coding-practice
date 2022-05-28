
/* Run this by
    tsc typeinferdemo.ts
    node typeinferdemo.js
*/
namespace typeinferdemo
{
    var number1:number=10;
    var number2:number=20;

    //if not explicitly define data type, will be "any"
    //function add(n1, n2, n3)

    function add(n1:number, n2:number, n3:number)
    {
        var result=n1+n2+n3;
        console.log(result);
    }

    add(10,20,30);
}