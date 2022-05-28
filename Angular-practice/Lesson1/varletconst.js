var varletconstdemo;
(function (varletconstdemo) {
    function testfun() {
        var pi = 3.14;
        var num1 = 10;
        {
            var num2 = 20;
            console.log(num1);
            console.log(num2);
        }
        console.log(num1);
        console.log(num2);
    }
    testfun();
})(varletconstdemo || (varletconstdemo = {}));
