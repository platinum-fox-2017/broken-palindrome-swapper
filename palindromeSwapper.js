/**
 * @function palindromeSwapper
 * menukar 2 huruf berurutan dari n = 0 sampai n-1
 * contoh: makan => amkan, mkaan, maakn, makna
 * @param {string} str - input kata yang ingin di-swap dan dicek palindrom
 * @returns {boolean} true bila kata yang di-swap adalah palindrom
 */
function palindromeSwapper(str) {
  let newStr = '';
  for (var i = 0; i < str.length; i++) {
    newStr = '';
    debugger
    for (var j = 0; j < str.length-1; j++) { // should be j not i
      if (i === j) {
        newStr += str[j+1];
        debugger // e
        newStr += str[j];
        debugger // r
      } else {
        newStr += str[j+1];
        debugger // erc
      }
      debugger // erc
    }
    debugger

  }
  
  if (isPalindrome(newStr)) {
    return true;
  } else {
    return false;
  }

}

/**
 * @function isPalindrome
 * Cek apabila kata merupakan palindromeSwapper
 * @param {string} str - input kata yang dicek bila palindrom
 * @returns {boolean} true bila kata adalah palindrom
 */
function isPalindrome(str) {
  if (str.split('').reverse().join('') == str) {
    return true;
    // console.log('====', str.split('').reverse().join(''), str); // palindrom works
  } else {
    return false;
  }
}


// TEST CASE
console.log(palindromeSwapper('arcecar')); // TRUE
console.log(palindromeSwapper('racecar')); // TRUE
console.log(palindromeSwapper('recacar')); // FALSE


/*
input: 3 console.log of string
output: 3 console.log of boolean
  expected TRUE TRUE TRUE // instead of FALSE FALSE FALSE FALSE FALSE

incorrect: 
- palindrom function should be be revised (done)
- swapper function should be revised
- console.log should be 3 instead of 5 (done)
*/