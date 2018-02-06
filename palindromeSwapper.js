function palindromeSwapper(str) {
  let newStr = '';
  if (isPalindrome(str)) {
      return true;
  } else {
      for (var i = 0; i < str.length; i++) {
          newStr = '';
          for (var j = 0; j < str.length; j++) {
            if (i === j) {    
              newStr += str[j+1];
              newStr += str[j];
              j++;
            } else {
              newStr += str[j];
            }
          }
          if (isPalindrome(newStr)) return true;
      }
      return false;
  }
}

function isPalindrome(str) {
  if (str.split('').reverse().join('') === str) return true;
  return false;
}

console.log(palindromeSwapper('arcecar')); // TRUE
console.log(palindromeSwapper('racecar')); // TRUE
console.log(palindromeSwapper('recacar')); // FALSE