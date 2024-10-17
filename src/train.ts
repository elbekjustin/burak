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

// function calculate(a:string): number {
//   const raqamlar = a.split("+").map(Number);
//   return raqamlar.reduce((b, c) => b + c, 0);
// } ;

// console.log(calculate("1+2+3+4+5"));



// S-TASK:

// Shunday function yozing, u numberlardan tashkil topgan array qabul qilsin va osha numberlar orasidagi tushib qolgan sonni topib uni return qilsin
// MASALAN: missingNumber([3, 0, 1]) return 2

// function missingNumber(nums: number[]): number {
//   const n = nums.length;

//   const expectedSum = (n * (n + 1)) / 2;

//   const actualSum = nums.reduce((acc, num) => acc + num, 0);

//   return expectedSum - actualSum;
// }

// console.log(missingNumber([0, 1, 2, 3, 5]));




// T-TASK:

// Shunday function yozing, u sonlardan tashkil topgan 2 ta array qabul qilsin va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin
// MASALAN: mergeSortedArrays([0,3,4,31], [4,6,30]); return [0,3,4,4,6,30,31]

// function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
//   return [...arr1, ...arr2].sort((a, b) => a - b);
// }

// const result: number[] = mergeSortedArrays([111, 99, 5, -22], [5, 9, 90, -20]);
// console.log(result); 




// U-TASK:

// Shunday function yozing, uni number parametri bolsin va 0 dan berilgan parametrgacha bolgan oraliqdagi faqat toq sonlar nechtaligini return qilsin
// MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;



// function sumOdds(number: number): number {
//   let count: number = 0;

//   for (let i = 1; i < number; i++) {
//     if (i % 2 !== 0) { // 2 ga bo‘linmasa
//       count++; 
//     }
//   }

//   return count;
// }

// console.log(sumOdds(3));





// V-TASK:

// Shunday function yozing, uni string parametri bolsin va stringdagi harf va u harf necha marta takrorlangani sonidan tashkil topgan object qaytarsin.
// MASALAN: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}


// function countChars(str: string): { [key: string]: number } {
//   const result: { [key: string]: number } = {};
  
//   for (let char of str) {
//     if (result[char]) {
//       result[char]++;
//     } else {
//       result[char] = 1;
//     }
//   }
  
//   return result;
// }

// console.log(countChars("assdddffff"));



// W-TASK:

// Shunday function yozing, uni array va number parametrlari bolsin. Function arrayni numberda berilgan uzunlikda kesib bolaklarga ajratilgan array holatida qaytarsin
// MASALAN: chunkArray([1,2,3,4,5,6,7,8,9,10], 3) return [[1,2,3], [4,5,6], [7,8,9], [10]]

function chunkArray(arr: any[], size: number): any[][] {
  const result: any[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9));









