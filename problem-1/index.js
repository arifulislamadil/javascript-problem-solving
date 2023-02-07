//Problem #1
const ludo = (ludo) => {
    console.log("from function", ludo)
    const playNum = Math.random(ludo) * 6;
    const play = playNum.toFixed(0);
    if (play < 1) {
        return 1
    } else {
        return play;
    }
}
const ludoNum = 6;
console.log(ludo(ludoNum));


//Problem #2
const students = ["sumit", "daiyan", "akash", "adil", "dabid"];
console.log(students.sort())
console.log(students);
const rollNumbers = [2, 3, 34, 22, 90, 3, 9, 5, 7];
console.log(rollNumbers.sort(function (a, b) {
    return b - a;
}));

//Problem #3
const leapYear = (year) => {
    if (year % 4 == 0 && (year % 400 == 0 || year % 100 !== 0)) {
        return "It's leap Year"
    } else {
        return "It's not Leap year"
    }
}
const year = 1804;
console.log(leapYear(year));


//Problem #4
const vowels = ["a", "e", "i", "o", "u", , "A", "E", "I", "O", "U"];
const countVowels = (text) => {
    let count = 0;
    const letters = Array.from(text);
    letters.forEach(function (value) {
        if (vowels.includes(value)) {
            count++;
        }
    })
    return count;
}
const text = "I Love Bangladesh";
console.log(countVowels(text))


//Problem #5

const numbers = [1, 3, 5, 7, 8, 2, 4, 3, 9, 4, 8, 9, 4];
const removeDouble = (numbers) => {
    const removeDouble = []
    for (let i = 0; i < numbers.length; i++) {
        if (removeDouble.indexOf(numbers[i]) == -1) {
            removeDouble.push(numbers[i])
        }
    }
    return removeDouble;
}
console.log(removeDouble(numbers));

//Problem #6
const sentence = "He is from bangladesh and his name is rahim and he living in Dubai rahim";
const matches = sentence.match(/rahim/gi);
const occurrence = matches ? matches.length : 0;
console.log(occurrence);
let position = sentence.search(/rahim/i);
position = position >= 0 ? position : "not found";
console.log(`match found: ${occurrence} and name first position ${position}`)


//Problem #7
function linearSearch(arr, val) {
    const length = arr.length;
    for (let i = 0; i < length; i++) {
        if (arr[i] === val) {
            return `${arr[i]} , ${i}`
        }
    }
    return "not found"
}
const firstNum = ['a', 'b', 'c', 'd', 'c'];
const secondNum = "c"
console.log(linearSearch(firstNum, secondNum))


//Problem #8

const biggestName = (names) => {
    let biggest = '';
    for( name of names){
        if(name.length > biggest.length){
           biggest=name;
        }
    }
    return [biggest, names.indexOf(biggest)];
}



const names = ["abir", "anfal", "ashik", "arfin", "ashik", "mahmudul"];
console.log(biggestName(names));


// Problem #9
function fizzBuzz(number){
    for(let i = 1; i<=number;i++){
        if(i% 3==0 && i%5==0){
            return "Foo Bee"
        }
        else if(i%3==0){
            console.log("poo")
        }else if(i%5==0){
            console.log("bee")
        }
        else{
            console.log(i)
        }
    }
}

console.log(fizzBuzz(20))


