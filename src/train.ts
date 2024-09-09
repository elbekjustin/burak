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

function getDigits(input: string): string {
    // Raqamlarni ajratib olish uchun regex foydalanamiz
    return input.replace(/\D/g, '');
}

console.log(getDigits("2q3w4e5r"));

