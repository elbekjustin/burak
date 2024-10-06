// ////// G-TASK

// function getHighestIndex(arr:number[]) {
//  // Bo'sh array uchun
//     if (arr.length === 0) return -1; 

//  // Eng katta qiymatni topamiz
//     const maxValue = Math.max(...arr); 

//  // Eng katta qiymatning birinchi indexini qaytaramiz
//     return arr.indexOf(maxValue);  
// }

// console.log(getHighestIndex([5, 21, 12, 21, 8])); 




// //////// H-TASK

// function getPositive(arr: number[]): string {
//    return arr
//        .filter(num => num > 0) // Musbat qiymatlarni olamiz
//        .map(num => num.toString()) // musbat qiymatni stringga aylantiramiz
//        .join(''); // Stringlarni birlashtiramiz
// }

// console.log(getPositive([-1, 99, -3, 8]));
// console.log(getPositive([19, 20, -3,])); 



////////// H2-TASK

// function getDigits(input: string): string {
//     // Raqamlarni ajratib olish uchun regex foydalanamiz
//     return input.replace(/\D/g, '');
// }

// console.log(getDigits("2q3w4e5r"));



// function majorityElement(arr: number[]): number {
//     const countMap: { [key: number]: number } = {}; // Elementlar sonini saqlash uchun obyekt

//     // Har bir elementni sanaymiz
//     for (let num of arr) {
//         countMap[num] = (countMap[num] || 0) + 1;
//     }

//     let majority: number = arr[0]; // Eng ko'p takrorlangan element
//     let maxCount: number = 0;      // Eng ko'p uchragan son

//     // Eng ko'p takrorlangan elementni topamiz
//     for (let num in countMap) {
//         if (countMap[num] > maxCount) {
//             maxCount = countMap[num];
//             majority = Number(num); // num - string turida, uni number ga o‘girlamoqdamiz
//         }
//     }

//     return majority;
// }

// // Misol:
// console.log(majorityElement([1, 2, 3, 7, 5, 7, 3, 7])); // return 4



// // J-TASK: 

// Shunday function yozing, u string qabul qilsin va string ichidagi eng uzun sozni qaytarsin.
// MASALAN: findLongestWord("I come from Uzbekistan") return "Uzbekistan"

// function findLongestWord(str: string): string {
  
//     let words: string[] = str.split(' ');
//     let longestWord: string = '';
//     for (let word of words) {
//       if (word.length > longestWord.length) {
//         longestWord = word;
//       }
//     }
//    return longestWord;
//   }
//   console.log(findLongestWord("I come from Uzbekistan"));



// K-TASK: 

// Shunday function yozing, u string qabul qilsin va string ichidagi unli harflar sonini qaytarsin.
// MASALAN: countVowels("string") return 1;

// function countVowels(str: string): number {
//   const vowels: string[] = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
//   let count: number = 0;

//   for (let i of str) {
//     if (vowels.includes(i)) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countVowels("Hello MIT"));





// L-TASK: 

// Shunday function yozing, u string qabul qilsin va string ichidagi hamma sozlarni chappasiga yozib va sozlar ketma-ketligini buzmasdan stringni qaytarsin.
// MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc";


// function reverseSentence(sentence: string): string {
//   const words = sentence.split(" ");
//   const reversedWords = words.map(word => word.split("").reverse().join(""));
//   return reversedWords.join(" ");
// }

// console.log(reverseSentence("we like coding!"));






// M-TASK: 

// Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin va array ichidagi har bir raqam uchun raqamni ozi va hamda osha raqamni kvadratidan tashkil topgan object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin.
// MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}];

// function getSquareNumbers(numbers: number[]): { number: number, square: number }[] {
//   return numbers.map(num => ({
//       number: num,
//       square: num * num
//   }));
// }

// const result = getSquareNumbers([1, 2, 3]);
// console.log(result);





// N-TASK: 

// Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham, orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.
// MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;


// function palindromCheck(str: string): boolean {

//   const reversed: string = str.split('').reverse().join('');
//   return str === reversed;
// }

// console.log(palindromCheck("mom"));





// O-TASK:

// Shunday function yozing, u har xil valuelardan iborat array qabul qilsin va array ichidagi sonlar yigindisini hisoblab chiqqan javobni qaytarsin.
// MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]) return 45

// function calculateSumOfNumbers(arr: any[]): number {
//   let sum: number = 0;

//   arr.forEach(item => {
//     if (typeof item === 'number') {
//       sum += item;
//     }
//   });

//   return sum;
// }

// console.log(calculateSumOfNumbers([10, "10", {son: 10}, true, 10])); 








// P-TASK:

// Shunday function yozing, u object qabul qilsin va arrayni object arrayga otkazib arrayni qaytarsin qaytarsin.
// MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]

// function objectToArray(obj: any) {
//   return Object.entries(obj);
// }

// console.log(objectToArray({ a: 10, b: 20 }));

  


// Q-TASK:

// Shunday function yozing, u 2 ta parametrgga ega bolib birinchisi object, ikkinchisi string. Agar string parametr objectni propertysi bolsa true bolmasa false qaytarsin.
// MASALAN: hasProperty({name: "BMW", model: "M3"}, "model") return true; hasProperty({name: "BMW", model: "M3"}, "year") return false

// function hasProperty(obj: object, key: string): boolean {
//   return key in obj;
// }

// console.log(hasProperty({ name: "BMW", model: "M3" }, "model")); 
// console.log(hasProperty({ name: "BMW", model: "M3" }, "year")); 





// R-TASK:

// Shunday function yozing, u string parametrga ega bolsin. String "1+2" holatda pass qilinganda string ichidagi sonlar yigindisini number holatda qaytarsin.
// MASALAN: calculate("1+3") return 4;

function calculate(a:string): number {
  const raqamlar = a.split("+").map(Number);
  return raqamlar.reduce((b, c) => b + c, 0);
} ;

console.log(calculate("1+2+3+4+5"));












