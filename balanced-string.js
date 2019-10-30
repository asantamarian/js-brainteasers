/* 

// Write a function that returns true if the brackets in a given string are balanced.
// Balanced means that every parenthesis/bracket or brace that is opened must be closed, and it must be closed in the right order (always close the last symbol you opened).
// The function must handle parens (), square brackets [], and curly braces {}.



// Test expressions:
// '(a[0]+b[2c[6]]) {24+53})'
// 'f(e(d))[()]{}([])'
// '((b)'
// '(c]'
// '{(a[])'
// '([)]'
// ')('
// ''
 */

var validPairs ={
  '{':'}',
  '(':')',
  '[':']',
}
var validChars ='';

Object.keys(validPairs).forEach( key =>{
  validChars += `${key}${validPairs[key]}`
});

var isValidChar = function (char) {
  
  if (validChars.indexOf(char) > -1) {
    return true;
  } else {
    return false;
  }
}

var opens = function (char) {
  if(validPairs[char]){
    return true;
  }
  return false;
}

function closes(topOfStack, closedParenthesis) {
  if(validPairs[topOfStack]===closedParenthesis){
    return true;
  }
  return false;
}

var balanceado = function (str){
  //Validar balanceo de parentesis
  var inputStr = str;
  
  if (inputStr === null) { return true }
  
  var strArray = inputStr.split('');

  var pila = [];

  for (var i = 0; i < strArray.length; i++) {
    if (isValidChar(strArray[i])) {

      if (opens(strArray[i])) {
            pila.push(strArray[i]);
      
      } else {
        
          if (pila.length === 0) {
              return false;
          }
      
          var top = pila.pop(); // saca el elemento de tope de la pila
      
          if (!closes(top, strArray[i])) {
                return false;
          }
      }
    }
  }
  var returnValue = pila.length === 0 ? true : false;
  return returnValue;
}
//EJECUCION



var tests =['(a[0]+b[2c[6]]) {24+53})',
'f(e(d))[()]{}([])',
'((b)',
'(c]', 
'{(a[])',
 '([)]',
 ')(',
 ''];

tests.forEach(str => {
    if(balanceado(str)){
        console.log("Balanceado");
      }else{
        console.log("No balanceado");
      }    
});
