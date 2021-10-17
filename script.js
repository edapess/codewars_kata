// // Welcome.

// // In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// // If anything in the text isn't a letter, ignore it and don't return it.


// function alphabetPosition(text) {
//   let textArr = text.toLowerCase().split('')

//   let alphabet = new Array(26).fill(1).map((_, i) => String.fromCharCode(97 + i))

//   let indexOfLetter = []

//   for (let i = 0; i < alphabet.length; i++) {
//     indexOfLetter.push(alphabet.indexOf(textArr[i]) + 1)
//   }
// let outPut = indexOfLetter.filter(letter => {
//     if (letter !== 0) {
//       return letter
//     }
//   })
//   console.log(outPut)
//   return outPut.join(" ")


// }

// alphabetPosition("The sunset sets at twelve o' clock.")



// // alphabetPosition("The sunset sets at twelve o' clock.")


// //******************************************************************** */
// //tribonacci

// // function tribonacci(signature, n) {
// //   let startPack = [...signature]
// //   if(n === 0) {
// //     startPack = []
// //   }
// //   else if (n === 1) {
// //      startPack = [startPack[0]]
// //   }
// //   else{
// //     for (let i = 0; i < n - signature.length; i++) {
// //       startPack.push(startPack[startPack.length-1]+startPack[startPack.length-2]+startPack[startPack.length-3])
// //     }
// //   }

// //     console.log(startPack);
// //     return startPack
// //   }

// // tribonacci([1, 1, 1], 0)
// // tribonacci([0, 0, 1], 10)
// // tribonacci([1, 4, 3], 11)
// // tribonacci([18, 8, 4], 1)

// //******************************************************************** */

// // The goal of this exercise is to convert a string to a new string where each 
// // character in the new string is "(" if that character appears only once in the original
// //  string, or ")" if that character appears more than once in the original string.
// //  Ignore capitalization
// //  when determining if a character is a duplicate.

// // "din"      =>  "((("
// // "recede"   =>  "()()()"
// // "Success"  =>  ")())())"
// // "(( @"     =>  "))((" 
// // function duplicateEncode(word) {
// //     let object = {}
// //     let letter = word.toLowerCase().split('')
// //     for (let i = 0; i < letter.length; i++) {
// //       let x = letter[i]
// //       if (object[x] === undefined) {
// //         object[x] = 1
// //       } else {
// //         object[x] += 1
// //       }
// //     }
// //     return letter.map((letter) => {
// //       return object[letter] === 1 ? '(' : ')'
// //     }).join('')
// //   }

// //   console.log(duplicateEncode("din") );
// //   console.log(duplicateEncode("recede"))
// //   console.log(duplicateEncode("Success"));
// //   console.log(duplicateEncode("(( @"));

// 'aeiou'
// function absentVowel(x) {
//   let vowelArr = ['a', 'e', 'i', 'o', 'u']

//   for (let i = 0; i < vowelArr.length; i++) {
//     if (x.indexOf(vowelArr[i]) == -1) {
//         return i
//     }

//   }

// }


// console.log(absentVowel('John Doe hs seven red pples under his bsket'));
// console.log(absentVowel('Bb Smith sent us six neatly arranged range bicycles'));



// function getMiddle(s) {
//   if (s.length % 2 == 0) {
//     return s[(s.length / 2) - 1] + s[s.length / 2]
//   } else if (s.length == 1) {
//     return s[0]
//   } else {
//     return s[Math.floor(s.length/2)]
//   }
// }


// console.log(getMiddle('test'));
// console.log(getMiddle('testing'));
// console.log(getMiddle('middle'));
// console.log(getMiddle('A'));


// function highAndLow(numbers){
// let numArr =  numbers.split(' ').map(Number)

// const low = Math.min(...numArr)
// const high = Math.max(...numArr)
// return `${high} ${low}`

// }

// console.log(highAndLow("1 2 3 4 5")) 
// console.log(highAndLow("1 2 -3 4 5"))
// console.log(highAndLow("1 9 3 4 -5"))

// function disemvowel(str) {
//   let vowels = "aeiouAEIOU"
//   let withoutVowel = ""
//   for (let i = 0; i < str.length; i++) {
//     if(vowels.includes(str[i]))continue;
//       withoutVowel += str[i]


//   }
//   return withoutVowel
// }


// console.log(disemvowel("This website is for losers LOL!"));

// function isIsogram(str){
//   return str.toLowerCase().split('').filter((el,index, array)=> array.indexOf(el)==index).length ==str.length
// }


// console.log(isIsogram("Dermatoglyphics"))
// console.log(isIsogram("aba"))
// console.log(isIsogram("moOse"))


// function nicknameGenerator(name){
// if(name.length < 4){
//     return "Error: Name too short"
// }

// else if(name[2].match(/[aeuio]/)){
//     return name.slice(0,4)
// }
// return name.slice(0,3)
// }


// console.log(nicknameGenerator("Robert"))
// console.log(nicknameGenerator("Kimberly"))
// console.log(nicknameGenerator("Jeannie"))
// console.log(nicknameGenerator("Douglas"))
// console.log(nicknameGenerator("Kay"))

// function explode(s) {
//     function replacer(match, p1, p2, p3, offset, string) {
//         return match.repeat(match)
//       }
//     return s.replace(/\d/g,replacer)

// }


// console.log(explode("312"));
// console.log(explode("102269"));

// function formatDuration (seconds) {
//   let time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
//       result = [];

//   if (seconds === 0) return 'now';
  
//   for (var key in time) {
//     if (seconds >= time[key]) {
//       var val = Math.floor(seconds/time[key]);
//       // result.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
//       if (val>1) {
//          result.push(val+= ' ' + key + 's')
//       }
//       else{
//         result.push(val+= ' ' + key)
        
//       }
//       seconds = seconds % time[key];
//     }
//   }
 
//   return result.length > 1 ? result.join(', ').replace(/,([^,]*)$/,' and'+'$1') : result[0]
// }
// class Ball{
//   constructor(ballType='regular'){
//   this.ballType = ballType}
  
//   }

//   ball1 = new Ball();
// ball2 = new Ball("super");

// console.log(ball1.ballType);
 
// console.log(ball2.ballType);