const test = `<div><h1>My Education</h1></div>`;
document.body.insertAdjacentHTML('beforebegin', test);

// const btn = document.querySelectorAll('.button');

// document.addEventListener('click', function (e) {
//     if (e.target.closest('.button')) {
//         e.target.classList.toggle('active')
//     } if (!e.target.closest('.button')) {
//         btn.forEach(button => {
//             button.classList.remove('active')
//         })
//     }
// })

// class Family {
//     constructor(params) {
//         this.name = params.name;
//         this.age = params.age;
//         this.money = params.money;
//     }
//     allMoneyHave () {
//         return `${this.name} зарабатывает в месяц ${this.money} рублей`
//     }
// }

// let mother = new Family (
//     {
//         name: 'Tatiana',
//         age: 47,
//         money: 30000,
//     }
// )
// let father = new Family (
//     {
//         name: 'Evgeniy',
//         age: 47,
//         money: 70000,
//     }
// )
// let dother = new Family (
//     {
//         name: 'Tanya',
//         age: 5,
//         money: 0,
//     }
// )

//

// const arr = [2, 3, 5, 87, 0, 22, -8, 64, -12, 35];
// let par = arr.reduce((acc, elem) => (elem > acc ? (acc = elem) : acc));
// console.log(par);

// Преобразование числа в двоичное и возвращение количества бит равных 1
// let bin = function (decNum) {
//    return Array.from(decNum.toString(2))
//          .map((i) => Number(i))
// 			.filter((num) => num > 0)
// Если нужно вернуть количество единиц
// .reduce((a, b) => a + b);
// А так можно вернуть количество либо единиц либо нолей
// 			.reduce((acc, item, index, array) => array.length)
// };
// console.log(bin(1234));

// let list1 = [
// 	{ firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
// 	{ firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
// 	{ firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
// 	{ firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
// 	{ firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
//  ];

//  function euroDev (list1) {
// 	return list1.filter((elem) => elem.continent == 'Europe' && elem.language == 'JavaScript').length
//  }

// function toCamelCase(str) {
//    return str
//       .trim()
//       .split(' ')
//       .map((s) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase())
//       .join('');
// }
// console.log(toCamelCase('привет маленький засранец'));

// function summ (arr) {
// 	return arr.reduce((acc, item) => acc + item)
// }
// console.log(summ([1,2,3,4,5]))

// const sheeps = [true,  true,  true,  false,
// 	true,  true,  true,  true ,
// 	true,  false, null,  false,
// 	true,  false, false, true ,
// 	true,  undefined,  true,  true ,
// 	true, false, true,  true]

// function sheepCounter (sheep) {
// 	return sheep.reduce((acc, item) => item === true ? acc + item : acc,0)
// console.log(sheep)
// }

// function sheepCounter (sheep) {
// 	return sheep.filter(Boolean).length;
// }

// const num = [1,2,3,4]
// function grow (x) {
// 	return x.reduce((acc, item) => acc * item)
// }
// console.log(grow(num))

// function bmi(weight, height) {
//    if ((weight / Math.pow(height,2)) <= 18.5) {
//       return 'Underweight';
//    }
//    else if ((weight / Math.pow(height,2)) <= 25.0) {
//       return 'Normal';
//    }
//    else if ((weight / Math.pow(height,2)) <= 30) {
//       return 'Overweight';
//    }
//    else if ((weight / Math.pow(height,2)) > 30) {
//       return 'Obese';
//    }
// }
// console.log(bmi(80, 1.80))

// const per = '-7'
// function convertToArr (str) {
// 	return parseInt(str.slice())
// }
// console.log(convertToArr('234'))

// Функция поиска простого числа
// function isPrime(num) {
//    if (num <= 1) return false;
//    else if (num === 2) return true;
//    else {
//       for (let i = 2; i < num; i++) if (num % i === 0) return false;
//       return true;
//    }
// }
// console.log(isPrime(23));

// const family = [
//    {
//       name: 'Tatiana',
//       age: 47,
//       status: ['mother', 'married'],
//    },
//    {
//       name: 'Tanya',
//       age: 5,
//       status: ['dother'],
//    },
//    {
//       name: 'Eugen',
//       age: 47,
//       status: ['father', 'married'],
//    },
// ];



//  Фильтр дубликатов
let fruits = ['banana', 'kiwi', 'orange', 'melon', 'kiwi', 'apple', 'banana'];
// Вариант 1
// let uniqFruit = fruits.reduce((uniq, item) => {
//    return uniq.includes(item) ? uniq : [...uniq, item];
// }, []);

// Вариант 2
// let uniqFruit = fruits.filter((item, index) => {
// 	console.table(item, index, fruits.indexOf(item))
// 	return index === fruits.indexOf(item);
// })

// Вариант 3
let uniqFruit = [...new Set (fruits)]

console.log(uniqFruit);
