/* Run this by
    tsc typeinferdemo.ts
    node typeinferdemo.js
*/
var typeinferdemo;
(function (typeinferdemo) {
    var number1 = 10;
    var number2 = 20;
    //if not explicitly define data type, will be "any"
    //function add(n1, n2, n3)
    function add(n1, n2, n3) {
        var result = n1 + n2 + n3;
        console.log(result);
    }
    add(10, 20, 30);
})(typeinferdemo || (typeinferdemo = {}));
