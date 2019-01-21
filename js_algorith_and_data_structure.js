function palindrome(str) {
  // Good luck!
  let newStr = str.split(/[\W+_]/g).join('').toLowerCase();
  let reverseStr = newStr.split('').reverse().join('');
  return (newStr === reverseStr) ? true : false;
}



console.log(palindrome("eye")); // true
console.log(palindrome("A man, a plan, a canal. Panama")); // true
console.log(palindrome("1 eye for of 1 eye.")); //false
console.log(palindrome("_eye")); //true
console.log(palindrome("0_0 (: /-\ :) 0-0")); //true
