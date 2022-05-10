/**
 * @description {method to check truthy or falsy value}
 * @param {any} input parameter
 * @ return string- Either input is truthy or falsy
 * step 1 take the input 
 * step 2 if input =(null||undefined||0||""||Nan||false)
 * step 2.1 if true return truthy;
 * step 2.2 else falsy;
 */

function truthyFalsy(input){
    if(input===undefined || input===false||input===0||input===null||input===""||Object.is(input,NaN)){
        return "falsy";
    }
    else{
        return "truthy";
    }
}
console.log("For NaN -"+truthyFalsy(NaN));
console.log("For 0- "+truthyFalsy(0));
console.log("For undefined- "+truthyFalsy(undefined));
console.log("For false- "+truthyFalsy(false));
console.log("For null- "+truthyFalsy(null));
console.log("for ''-"+truthyFalsy('') );
console.log("for number 10-"+truthyFalsy(10));
console.log("for string abcd-"+truthyFalsy("abcd"));
// console.log("For NaN -"+truthyFalsy("NaN"));
// console.log(isNaN(NaN));
