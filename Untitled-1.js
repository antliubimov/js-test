"use strict";

// function sumOfSquareDigits(n) {
//   let str = String(n);
//   let result = 0;
//   for (let i = 0; i < str.length; i += 1) {
//     result += Math.pow(Number(str[i]), 2);
//   }
//   return result;
// }

// function isHappyNumber(num) {
//   for (let i = 1; i <= 10; i++) {
//     if (num === 1) return true;
//     num = sumOfSquareDigits(num);
//   }
//   return false;
// }
// console.log(isHappyNumber(8));

// function isHappyTicket(ticket) {
//   let str = String(ticket);
//   let beginTicket = 0;
//   let endTicket = 0;
//   let median = str.length / 2;
//   for (let i = 0; i < median; i++) {
//     beginTicket += Number(str[i]);
//   }
//   for (let i = median; i < str.length; i++) {
//     endTicket += Number(str[i]);
//   }
//   if (beginTicket === endTicket) return true;
//   return false;
// }
// console.log(isHappyTicket(385916));
// console.log(isHappyTicket('231002'));

// function formattedTime(num){
//   let hours = Math.floor(num / 60);
//   let minutes = num - (hours * 60);
//   if (hours < 10) { hours = '0' + hours;}
//   if (minutes < 10) {minutes = '0' + minutes};
//   return `${hours}:${minutes}`;
// }
// console.log(formattedTime(5));
// console.log(formattedTime(60));
// console.log(formattedTime(67));
// console.log(formattedTime(175));
// console.log(formattedTime(754));

// function invertCase(str) {
//   let newStr = '';
//   for (let i = 0; i < str.length; i++) {
//    (str[i] === str[i].toUpperCase()) ?
//                  newStr += str[i].toLowerCase() : newStr += str[i].toUpperCase();
//   }
//   return newStr;
// }
// console.log(invertCase('Hello, World!')); // hELLO, wORLD!
// console.log(invertCase('I loVe JS')); // i LOvE js

// function reverseInt(num) {
//   let newNum = '';
//   if (num < 0) {
//     newNum = '-';
//     num *= -1;
//   };
//   let str = String(num);
//   for (let i = str.length - 1; i >= 0; i -= 1) {
//     newNum += str[i];
//   }
//   return newNum;
// }
// console.log(reverseInt(13)); // 31
// console.log(reverseInt(-123)); // -321

// function spinalCase(str) {
//   let newStr = '';
//   const regEx = /[\W_]/g;
//   const regEx2 = /([a-z])([A-Z])/g;
//   newStr = str.replace(regEx2, '$1 $2');
//   newStr = newStr.replace(regEx, '-').toLowerCase();
//   return newStr;
// }

// console.log(spinalCase('This Is Spinal Tap'));
// console.log(spinalCase("thisIsSpinalTap"));

// function translatePigLatin(str) {
//   const regEx = /^[^aeiouy]*/gi;
//   let pigLatin = '';
//   let newArr = str.match(regEx);
//   if (newArr[0] === str) {
//     pigLatin = str + 'ay';
//   } else if ( newArr[0] !== '') {
//     pigLatin = str.substr(newArr[0].length) + newArr[0] + 'ay';
//   } else {
//     pigLatin = str + 'way';
//   }
//   return pigLatin;

// }

// console.log(translatePigLatin("consonant"));
// console.log(translatePigLatin("paragraphs"));
// console.log(translatePigLatin("california")); // should return );"aliforniacay".
// console.log(translatePigLatin("glv"));
// console.log(translatePigLatin("algorithm"));

// function myReplace(str, before, after)
//   const regEx = new RegExp(before, 'g');
//   let firstBefore = before.slice(0, 1);
//   let firstAfter = after.slice(0, 1);
//   let firstUppAfter = '';
//   if (firstBefore.toUpperCase() === firstBefore) {
//     firstUppAfter = firstAfter.toUpperCase();
//   } else {
//     firstUppAfter = firstAfter.toLowerCase();
//   }
//   after = after.replace(firstAfter, firstUppAfter);
//   return str.replace(regEx, after);
// }

// console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
// console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));

// function pairElement(str) {
//   let arr = str.split('');
//   let newArr = [];
//   arr.map(x => {
//     let tmpArr = [];
//     tmpArr.push(x);
//     switch (x) {
//       case 'A':
//         tmpArr.push('T');
//         break;
//       case 'T':
//         tmpArr.push('A');
//         break;
//       case 'C':
//         tmpArr.push('G');
//         break;
//       case 'G':
//         tmpArr.push('C');
//         break;
//     };
//     newArr.push(tmpArr);
//   });
//   return newArr;
// }

// console.log(pairElement("GCG"));

// function fearNotLetter(str) {
//   for (let i = 0; i < str.length; i += 1) {
//     let charCode = str.charCodeAt(i);
//     if (charCode != str.charCodeAt(0) + i) {
//       return String.fromCharCode(charCode - 1);
//     }
//   }
//   return undefined;
// }

// console.log(fearNotLetter("abce"));

// function uniteUnique(arr) {
//   let newArr = [];
//   for (let i = 0; i < arguments.length; i += 1) {
//     for (let j = 0; j < arguments[i].length; j += 1) {
//       if (!newArr.includes(arguments[i][j]) ) {
//           newArr.push(arguments[i][j]);
//       }
//     }
//   }
//   return newArr;
// }

// console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

// function convertHTML(str) {
//   // &colon;&rpar;
//   let pairs = {
//     '&': '&amp;',
//     '<': '&lt;',
//     '>': '&gt;',
//     '"': '&quot;',
//     '\'': '&apos;'
//   }
//   for (let prop in pairs) {
//     if (str.match(prop) !== -1) {
//       let props = new RegExp(prop,'g');
//       str = str.replace(props, pairs[prop]);
//     }
//   }
//   return str;
// }

// console.log(convertHTML("Dolce & Gabbana"));
// console.log(convertHTML('Stuff in "quotation marks"'));
// console.log(convertHTML("Hamburgers < Pizza < Tacos"));

// function sumOddFibs(num) {
//   let first = 1;
//   let second = 1;
//   let sum = first + second;
//   let fib = 0;
//   if (num < 0) return -1;
//   if (num === 0 || num === 1) return 1;
//   while (fib <= num) {
//     fib = first + second;
//     first = second;
//     second = fib;
//     if (fib % 2 !== 0 && fib <= num) {
//       sum += fib;
//     }
//   }
//   return sum;
// }

// console.log(sumOddFibs(10)); //10

// function sumPrimes(num) {
//   if (i < 2) return false;

//   for (let i = 2; i <= num; i += 1) {
//     let q = Math.floor(Math.sqrt(i);
//     for (let j = 2; j <= q); j += 1) {
//       if (i % j == 0) continue nextPrime;
//     }
//   }
//   return num;
// }

// console.log(sumPrimes(10)); // 17
// console.log(sumPrimes(977)); // 73156

// function binaryAgent(str) {
//   let newArr = [];
//   let arr = str.split(' ');
//   arr.forEach(elem => {
//     let sum = 0;
//     let subElem = elem.split('');
//     let len = subElem.length;
//     for (let i = 0; i < len; i += 1) {
//       sum += subElem[i] * Math.pow(2, len - i - 1);
//     };
//     newArr.push(sum);
//   });
//   let resultArr = [];
//   newArr.forEach(x => resultArr.push(String.fromCharCode(x)));
//   return resultArr.join('');
// }

// console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111")); //Aren't bonfires fun!?

// function truthCheck(collection, pre) {
//   // Is everyone being true?
//  return collection.every(function (x) {
//    return x.hasOwnProperty(pre) && Boolean(x[pre]);
//   })
// }

// console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));
// console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));
// console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age"));

// function addTogether() {
//   let args = [...arguments];
//   if (args.every(x => typeof x === 'number') === false) return undefined;
//   if (arguments.length === 1) {
//     let arg1 = arguments[0];
//     return function(arg2) {
//       if (typeof arg2 !== 'number') return undefined;
//       return arg1 + arg2;
//     };
//   }
//   if (arguments.length === 2) {
//     return arguments[0] + arguments[1];
//   }
// }

//console.log(addTogether(2, 3)); // 5
// console.log(addTogether(2)(3)); // 5
//console.log(addTogether("http://bit.ly/IqT6zt")); //undefined
//console.log(addTogether(2, "3")); //undefined

// var Person = function(firstAndLast) {
//   // Complete the method below and implement the others similarly
//   let first = firstAndLast.match(/\w+/g);

//   this.getFullName = function() {
//     return `${first[0]} ${first[1]}`;
//   };
//   this.getFirstName = function() {
//     return first[0];
//   };
//   this.getLastName = function() {
//     return first[1];
//   };
//   this.setFullName = function (name) {
//     first = name.match(/\w+/g);
//   };
//   this.setFirstName = function (name) {
//     first[0] = name;

//   };
//   this.setLastName = function (name) {
//     first[1] = name;
//   };

// };

// var bob = new Person('Bob Ross');
// console.log(bob.getFullName());
// console.log(Object.keys(bob).length); //should return 6.
// console.log(bob instanceof Person); //should return true.
// console.log(bob.firstName); //should return undefined.
// console.log(bob.lastName); //should return undefined.
// console.log(bob.getFirstName()); //should return "Bob".
// console.log(bob.getLastName()); //should return "Ross".
// console.log(bob.getFullName()); //should return "Bob Ross".
// bob.setFirstName("Haskell");
// console.log(bob.getFullName()); //should return "Haskell Ross" after bob.setFirstName("Haskell").
// bob.setFullName("Haskell Curry");
// console.log(bob.getFullName()); // Haskell Curry
// console.log(bob.getLastName());  // Curry

// function orbitalPeriod(arr) {
//   var GM = 398600.4418; // the GM value of earth
//   var earthRadius = 6367.4447; // the radius of the earth

//   let newArr = [];

//   arr.forEach(element => {
//     let obj = {};
//     obj['name'] = element['name'];
//     obj['orbitalPeriod'] = Math.round(2 * Math.PI * Math.sqrt((element['avgAlt'] + earthRadius) ** 3 / GM));
//     newArr.push(obj);
//   });
//   return newArr;
// }

// console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}])); //should return [{name: "sputnik", orbitalPeriod: 86400}].
// console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])); // should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].