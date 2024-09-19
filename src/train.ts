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

function countVowels(str: string): number {
  const vowels: string[] = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let count: number = 0;

  for (let i of str) {
    if (vowels.includes(i)) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("Hello MIT"));


  