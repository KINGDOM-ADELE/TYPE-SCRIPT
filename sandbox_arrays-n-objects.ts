// Using type-script inferred types based on the value assigned

//Arrays
let names = ["green", "henry", "precious"]
names.push('hope')
names[0] = 'gift'
// names.push(9); // Type-script will flag this cause the array names is inferred to be of type string can not accept numbers
// names[0] = 5; // Type-script will flag this cause the array names is inferred to be of type string can not accept numbers 
// names = 'green' // Type-script will flag this cause the variable names is inferred to be an ARRAY can not be changed to another data type

let numArrays = [4, 8, 10]
// numArrays.push('hope') // Type-script will flag this cause the array numArrays is inferred to be of type number can not accept strings
// numArrays[0] = 'gift' // Type-script will flag this cause the array numArrays is inferred to be of type number can not accept strings
numArrays.push(9); 
numArrays[0] = 5; 


let mixedArrays = [4, 8, "ken", true, 'henry', 10]
// Type-script will accept all because mixedArrays is inferred to be of union-types number can accept strings, numbers and booleans as inferred from the set array
mixedArrays.push('hope') 
mixedArrays[0] = 'gift' 
mixedArrays.push(9); 
mixedArrays[0] = 5; 
mixedArrays.push(false); 
mixedArrays[3] = 5; 
mixedArrays[3] = false; 
mixedArrays[3] = 'green'; 
// mixedArrays.push({name:"green"}); // Type-script will flag this cause the array mixedArrays is inferred to be of types number, strings and booleans hence can not accept objects or arrays
// mixedArrays.push([4, 6, 8]); // Type-script will flag this cause the array mixedArrays is inferred to be of types number, strings and booleans hence can not accept objects or arrays



//Objects
let student = {
    name: 'henry',
    age: 30,
    class: "ss3"
}

// if we declare a property to be of value type string it can not be changed
// if we declare a property to be of value type number it can not be changed
// if we declare a property to be of value type boolean it can not be changed
// if we declare  an object and set its property we can not set a new property

student.age = 40
// student.age = '40' // Type-script will flag this cause this object property is inferred to of type number and can not change types
student.name = "henry"
// student.name = 40 // Type-script will flag this cause this object property is inferred to of type string and can not change types
student.class = 'ss2'
// student.class = true // Type-script will flag this cause this object property is inferred to of string number and can not change types
// student.course = 'science' // Type-script will flag this cause this object property is not part of the original set properties of student object


student = {
    name: 'henry',
    age: 30,
    class: "ss3" // note if we remove any property, type script will flag it because it does not match the original structure of the object
}