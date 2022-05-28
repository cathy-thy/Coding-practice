var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var spreadopr;
(function (spreadopr) {
    var arr1 = [11, 22, 33];
    var copyArr = __spreadArray([], arr1, true);
    for (var _i = 0, copyArr_1 = copyArr; _i < copyArr_1.length; _i++) {
        var value = copyArr_1[_i];
        console.log(value);
    }
    var mergedArr = __spreadArray(__spreadArray([], arr1, true), copyArr, true);
    console.log("--------merger arr --------");
    for (var _a = 0, mergedArr_1 = mergedArr; _a < mergedArr_1.length; _a++) {
        var value = mergedArr_1[_a];
        console.log(value);
    }
})(spreadopr || (spreadopr = {}));
