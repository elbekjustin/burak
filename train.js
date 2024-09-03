////// G-TASK

function getHighestIndex(arr) {
 // Bo'sh array uchun
    if (arr.length === 0) return -1; 

 // Eng katta qiymatni topamiz
    const maxValue = Math.max(...arr); 

 // Eng katta qiymatning birinchi indexini qaytaramiz
    return arr.indexOf(maxValue);  
}

console.log(getHighestIndex([5, 21, 12, 21, 8])); 
