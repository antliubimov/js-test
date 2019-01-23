// function palindrome(str) {
//   // Good luck!
//   let newStr = str.split(/[\W+_]/g).join('').toLowerCase();
//   let reverseStr = newStr.split('').reverse().join('');
//   return (newStr === reverseStr) ? true : false;
// }

// console.log(palindrome("eye")); // true
// console.log(palindrome("A man, a plan, a canal. Panama")); // true
// console.log(palindrome("1 eye for of 1 eye.")); //false
// console.log(palindrome("_eye")); //true
// console.log(palindrome("0_0 (: /-\ :) 0-0")); //true

function convertToRoman(num) {
  let roman = '';
  const romanNumbers = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  const decimalNumbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  for (let i = 0; i < decimalNumbers.length; i += 1) {
    while (num >= decimalNumbers[i]) {
      roman += romanNumbers[i];
      num -=decimalNumbers[i];
    }
  }
  return roman;

}

console.log(convertToRoman(36));
console.log(convertToRoman(29)) // return "XXIX"
console.log(convertToRoman(83)); //return "LXXXIII"
console.log(convertToRoman(400)); //return "CD"