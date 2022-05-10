# truthyFalsyCheck
/**
 * @description {method to check truthy or falsy value}
 * @param {any} input parameter
 * @ return string- Either input is truthy or falsy
 * step 1 take the input 
 * step 2 if input =(null||undefined||0||""||Nan||false)
 * step 2.1 if true return truthy;
 * step 2.2 else falsy;
 */
Note: Tricky Part of the problem is  if user inputs "NaN" then
while checking it will be  Nan===Nan which gives gives false.
