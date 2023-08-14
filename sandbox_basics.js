// Using type-script inferred types based on the value assigned
var Black = false;
var age = 30;
var player = "farnk";
var circ0 = function (dia) {
    return dia * Math.PI;
};
console.log(circ0('frank'));
console.log(circ0(9));
var circ1 = function (dia) {
    return dia * Math.PI;
};
// console.log(circ1('frank'))//type-script flags this  because this function is to accept a number not a string
console.log(circ1(12));
