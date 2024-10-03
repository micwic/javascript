// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}
// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"
// Block Scope
// console.log(blockVar);
// console.log(blockLet);
function show(){
var functionVar = "I'm a block-scoped var";
let functionLet = "I'm a block-scoped let";
const functionConst = "I'm a block-scoped const";
}
show();

console.log(functionVar); // Throws ReferenceError
console.log(functionLet); // Throws ReferenceError
console.log(functionConst); // Throws ReferenceError

// Practice task
{
    let myletvar;
    var myvarvar;
    const myconstvar = "I'm a constant";
    myletvar = "I'm a let var";
    myvarvar = "I'm a var var";
    //myconstvar = "I'm a constant. I have to be initiziazed during first declaration. I will cause an exception";
}
myletvar = "I'm a let var defined elsewhere. I will cause an exception";
myvarvar = "I'm a reassigned var var";
myconstvar = "I'm an already assigned contant. I will cause an exception"