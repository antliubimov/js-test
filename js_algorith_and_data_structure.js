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

// function convertToRoman(num) {
//   let roman = '';
//   const romanNumbers = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
//   const decimalNumbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
//   for (let i = 0; i < decimalNumbers.length; i += 1) {
//     while (num >= decimalNumbers[i]) {
//       roman += romanNumbers[i];
//       num -=decimalNumbers[i];
//     }
//   }
//   return roman;

// }

// console.log(convertToRoman(36));
// console.log(convertToRoman(29)) // return "XXIX"
// console.log(convertToRoman(83)); //return "LXXXIII"
// console.log(convertToRoman(400)); //return "CD"

// function rot13(str) { // LBH QVQ VG!
//   let newStr = '';
//   for (let i = 0; i < str.length; i += 1) {
//     let charCode = str.charCodeAt(i);
//     if (charCode >=65 && charCode <= 90) {
//       if (charCode >= 78) {
//         charCode -= 13;
//       } else {
//         charCode += 13;
//       }
//     }
//     newStr += String.fromCharCode(charCode);
//   }
//   return newStr;
// }

// // Change the inputs below to test
// console.log(rot13("SERR PBQR PNZC")); // FREE CODE CAMP
// console.log(rot13('SERR YBIR?')); //FREE LOVE?
// console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")); //THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.

// function telephoneCheck(str) {
//   // Good luck!
//   let regExp = /^([1]?\s?)?((\(\d{3}\)|\d{3})\s?[-]?)(\d{3}[-\s]?\d{4})$/;
//   return regExp.test(str);
// }

// console.log(telephoneCheck("555-555-5555"));
// console.log(telephoneCheck("1 555-555-5555")); //true
// console.log(telephoneCheck("555-5555")); //false
// console.log(telephoneCheck("1 555)555-5555")); //false
// console.log(telephoneCheck("(6054756961)")); // false
// console.log(telephoneCheck("2 (757) 622-7382")); // false.
// console.log(telephoneCheck("0 (757) 622-7382")); // false.
// console.log(telephoneCheck("-1 (757) 622-7382")); // false
// console.log(telephoneCheck("2 757 622-7382")); // false.
// console.log(telephoneCheck("10 (757) 622-7382")); // false.
// console.log(telephoneCheck("27576227382")); // false.
// console.log(telephoneCheck("(275)76227382")); // false.
// console.log(telephoneCheck("2(757)6227382")); // false.
// console.log(telephoneCheck("2(757)622-7382")); // false.
// console.log(telephoneCheck("(555-555-5555")); // false.

function checkCashRegister(price, cash, cid) {
  // Here is your change, ma'am.
  const currUnits = [ {name: "ONE HUNDRED", value: 100},
               {name: "TWENTY", value: 20},
               {name: "TEN", value: 10},
               {name: "FIVE", value: 5},
               {name: "ONE", value: 1},
               {name: "QUARTER", value: 0.25},
               {name: "DIME", value: 0.1},
               {name: "NICKEL", value: 0.05},
               {name: "PENNY", value: 0.01}];
  let change = cash - price;
  let output = {status: null, change: []};
  let amountCid = cid.reduce( function (acc, item) {
    acc.total += item[1];
    //acc[item[0]] = item[1];
    return acc;
  }, {total : 0} );

  if (amountCid.total === change) {
    output.status = 'CLOSED';
    output.change = cid;
    return output;
  }

  if (amountCid.total < change) {
    output.status = 'INSUFFICIENT_FUNDS';
    return output;
  }

  let arrChange = currUnits.reduce(function(acc, item){
    let sum = 0;
    while (amountCid[item.name] > 0 && change >= item.value) {
      change -= item.value;
      amountCid[item.name] -= item.value;
      sum += item.value;
      change = Math.round(change * 100) / 100;
    }
    if (sum > 0) {
      acc.push([item.name, sum]);
    }
    return acc;
  }, []);

  if (arrChange.length < 1 || change > 0) {
    output.status = 'INSUFFICIENT_FUNDS';
    return output;
  }


  output.status = 'OPEN';
  output.change = arrChange;
  return output;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])); //{status: "OPEN", change: [["QUARTER", 0.5]]}.
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])); //should return {status: "INSUFFICIENT_FUNDS", change: []
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])); // {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}