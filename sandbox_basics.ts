// Using type-script inferred types based on the value assigned

let Black = false;
let age = 30;
let player = "farnk"


const circ0 = (dia) => {// this function will accept any value and will not be flaged by type-script
    return dia * Math.PI
}

console.log(circ0('frank'))
console.log(circ0(9))


const circ1 = (dia: number) => {// this will only accept a number
    return dia * Math.PI 
}

// console.log(circ1('frank'))//type-script flags this  because this function is to accept a number not a string
console.log(circ1(12)) 
