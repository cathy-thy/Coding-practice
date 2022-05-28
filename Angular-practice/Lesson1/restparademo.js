var restpara;
(function (restpara) {
    function test(num1, num2) {
        var values = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            values[_i - 2] = arguments[_i];
        }
        var result = num1 + num2;
        for (var _a = 0, values_1 = values; _a < values_1.length; _a++) {
            var value = values_1[_a];
            result += value;
        }
        return result;
    }
    console.log(test(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
})(restpara || (restpara = {}));
