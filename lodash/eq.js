/**
* 1. if Type(x) is different from Type(y), return false;
* 2. if Type(x) is Number then
*    a. if x is NaN and y is NaN, return true;
*    b. if x is +0 and y is -0 ,return true;
*    c. if x is -0 and y is +0, return true;
*    d. if x is the same Number value as y, return true;
*    e. return false
* 3. Return [SameValueNonNumber(x,y)](http://ecma-international.org/ecma-262/7.0/#sec-samevaluenonnumber)
*/
function eq(value, other) {
    return value === other || (value !== value && other !== other)
}
