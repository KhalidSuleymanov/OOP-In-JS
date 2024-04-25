//<============================================ Task 1 ==============================================>

/*Elə bir metod yazın ki parametr olaraq ancaq array qebul etsin (Array.isArray()).
Və consolda arrayın ən kiçik elementini qaytarsın

let nums = [10, 25, 30, 20, 40, 45, 35, 50]
let num = nums[0];
function littleNum(nums) {
    if (Array.isArray(nums) == true) {
        for (let i = nums[0]; i < nums.length; i++) {
            if (nums[i] < num) {
                nums[i] = num;
            }
        }
    }
    return num;
}
console.log(littleNum(nums));
*/

//<============================================ Task 2 ==============================================>

/*Elə bir metod yazın ki parametr olaraq string qəbul eləsin.
Və əgər stringin içərisində eyni hərf varsa eyni olanları consolda göstərsin

let name1 = "Mamedeeeeemmmmmmmmmmmmmmmm"
function sameLetter(name1) {
    let sameLet = [];
    for (let i = 0; i < name1.length; i++) {
        for (let j = i + 1; j < name1.length; j++) {
            if (name1[i] == name1[j]) {
                if (sameLet.includes(name1[i])) {
                }
                else {
                    sameLet.push(name1[i])
                }
            }
        }
    }
    return sameLet;
}
console.log(sameLetter(name1.toLowerCase()));
*/

//<============================================ Task 3 ==============================================>

/*Elə bir metod yazın ki parametr olaraq cümlə qəbul eləsin və
həmin cümlədə sözlərin sayını tapan alqoritm yazın.

let stc1 = "Cümlədə sözlərin sayını tapan alqoritm yazın."
let stc = stc1.trim()
let count = 1
function StcNums() {
    for (let i = 0; i < stc.length; i++) {
        if (stc[i] == ' ') {
            count++;
        }
    }
    return count
}
console.log(StcNums(count))
*/

//<============================================ Task 4 ==============================================>

/*Elə bir metod yazın ki ona bir parametr olaraq söz göndəriləcək(string) və əgər həmin söz palindrome-dursa
(yəni sondan oxunuşu əvvəldən oxunuşla eyni misal üçün ada, kiçik və s.) bunu bildirsin(alert və ya başqa yerdə)

let word = "madam"
let opStr = "";
function Polidroms() {
    for (let i = word.length - 1; i >= 0; i--) {
        opStr = opStr + word[i];
        if (opStr == word) {
            console.log("Polidromdur")
        }
    }
    if (opStr != word) {
        console.log("Polidrom deyil");
    }
}
console.log(Polidroms(word))
*/

//<============================================ Task 5 ==============================================>

/*Fibonacci
var nums = []
nums[0] = 0;
nums[1] = 1;
let a = 100;
for (var i = 2; i < a; i++) {
    nums[i] = nums[i - 1] + nums[i - 2]
    console.log(nums[i]);
}
*/


