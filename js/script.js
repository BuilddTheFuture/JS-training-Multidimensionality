'use strict';

// let arr = [
// 	['a', 'b', 'c'],
// 	['d', 'e', 'f'],
// 	['g', 'h', 'i'],
// 	['j', 'k', 'l'],
// ];
// console.log (arr[3][2], arr[1][1], arr[0][1], arr[0][0]); // вывели 'l', 'e', 'g' и 'a'

// let arr = [[1, 2], [3, 4], [5, 6]];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j <=1; j++) {
//         sum += arr [i][j]; // нашли сумму всех элементов двухмерного массива
//     }
// }
// console.log (sum)

// let arr = [
// 	[
// 		[1, 2],
// 		[3, 4],
// 	],
// 	[
// 		[5, 6],
// 		[7, 8],
// 	],
// ];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j <= 1; j++) {
//         for (let n = 0; n <= 1; n++) {
//             sum += arr [i][j][n]; // нашли сумму всех элементов трехмерного массива
//         }
//     }
// }
// console.log (sum)

// let arr = [
//     [1, 2, 3, [4, 5, [6, 7]]], 
//     [8, [9, 10]]
// ];
// console.log (arr[0][0] + arr[0][1] + arr[0][2] + arr[0][3][0] + arr[0][3][1] + arr[0][3][2][0] 
//     + arr[0][3][2][1] + arr[1][0] + arr[1][1][0] + arr[1][1][1]) // перебрали без цикла все массивы

// let arr = [[1, 2, 3, 4, 5], [6, 7, 8], [9, 10]];
// for (let sub_arr of arr) {
//     for (let elem of sub_arr) {
//         console.log (elem)
//     }
// }

// let arr = [[1, 2, 3], [4, 5], [6]];
// let res = 0;
// for (let sub_arr of arr) {
//     for (let elem of sub_arr) {
//         res += elem; // С помощью вложенных циклов нашли сумму элементов 2-хмерного массива
//     }
// }
// console.log (res)

// let arr = [
//     [
//         [1, 2], 
//         [3, 4]
//     ], 
//     [
//         [5, 6], 
//         [7, 8]
//     ]
// ];
// let sum = 0;
// for (let sub_arr of arr) {
//     for (let pre_sub_arr of sub_arr) {
//         for (let elem of pre_sub_arr) {
//             sum += elem; // С помощью вложенных циклов нашли сумму элементов 3-хмерного массива
//         }
//     }
// }
// console.log (sum)

// let arr = [];
// for (let i = 0; i < 3; i++) {
// 	arr[i] = []; // создаем подмассив
// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = j + 1; // заполняем подмассив числами
// 	}
// }
// console.log(arr);

// let arr = [];
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
	
// 	for (let j = 0; j < 3; j++) {
// 		arr[i].push(j + 1); // Заполнение с помощью push
// 	}
// }
// console.log(arr);

// let arr = [];
// for (let i = 0; i < 3; i++) {
//     arr [i] = [];
//     for (let j = 0; j < 5; j++) {
//         arr[i].push (j + 1); // создали массив [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]]
//     }
// }
// console.log (arr)

// let arr = [];
// for (let i = 0; i < 3; i++) {
//     arr [i] = [];
//     for (let j = 0; j < 4; j++) {
//         arr[i].push ('x'); // создали массив [['x', 'x', 'x', 'x'], ['x', 'x', 'x', 'x'], ['x', 'x', 'x', 'x']]
//     }    
// }
// console.log (arr)

// let arr = [];
// for (let i = 0; i < 3; i++) {
//     arr [i] = [];
//     for (let j = 0; j < 2; j++) {
//         arr[i][j] = [];
//         for (let n = 0; n < 5; n++) {
//             arr[i][j].push (n + 1); // создали массив 
//         }    
//     }
// }
// console.log (arr)

// let arr = [];
// let k = 1; // счетчик
// for (let i = 0; i < 5; i++) {
//     arr[i] = [];
//     for (let j = 0; j < 4; j++) {
//         arr[i][j] = k; // записываем счетчик
//         k++; // увеличиваем счетчик
//     }
// }
// console.log (arr)

// let arr = [];
// for (let i = 0, k = 2; i < 4; i++) {
//     arr[i] = [];
//     for (let j = 0; j < 3; j++, k += 2) {
//         arr[i][j] = k;
//     }
// }
// console.log (arr)

// let arr = [];
// let k = 1;
// for (let i = 0; i <br 3; i++) {
// 	arr[i] = [];	
// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k;
// 		k++;
// 	}
// }
// console.log(arr);

// let obj = {
// 	key1: {
// 		key1: 1,
// 		key2: 2,
// 		key3: 3,
// 	},
// 	key2: {
// 		key1: 4,
// 		key2: 5,
// 		key3: 6,
// 	},
// 	key3: {
// 		key1: 7,
// 		key2: 8,
// 		key3: 9,
// 	},
// }
// let sum = 0;
// for (let key_1 in obj) {
//     for (let elem in obj[key_1]) {
//         sum += obj[key_1][elem]; // сумма элементов
//     }
// }
// console.log (sum)

// let obj = {
// 	key1: {
// 		a: 1, 
//         b: 2, 
//         c: {
// 			d: 3,
// 			e: 4,
// 		}, 
//         f: 5,
// 	},
// 	key2: {
// 		g: 6, 
//         h: 7,
// 	},
// }
// let sum = 0;
// for (let k1 in obj) {
//     for (let k2 in obj[k1]) {
//         if (typeof (obj[k1][k2]) === 'number') {
//             sum += obj[k1][k2];
//         } else {
//             for (let k3 in obj[k1][k2]) {
//                 sum += obj[k1][k2][k3];
//             }
//         }
//     }
// }
// console.log (sum) // сумма всех элементов-чисел

// let obj = {
// 	1: {
// 		1: 11,
// 		2: 12,
// 		3: 13,
// 	},
// 	2: {
// 		1: 21,
// 		2: 22,
// 		3: 23,
// 	},
// 	3: {
// 		1: 24,
// 		2: 25,
// 		3: 26,
// 	},
// }
// let sum = 0;
// for (let key in obj) {
//     let sub_obj = obj[key];
//     for (let sub_key in sub_obj) {
//         sum += sub_obj[sub_key]
//     }
// }
// console.log (sum) // сумма элементов этого объекта

// Задача №1

// let months = {
// 	'ru': [
// 		'январь',
// 		'февраль',
// 		'март',
// 		'апрель',
// 		'май',
// 		'июнь',
// 		'июль',
// 		'август',
// 		'сентябрь',
// 		'октябрь',
// 		'ноябрь',
// 		'декабрь',
// 	],
// 	'en': [
// 		'january',
// 		'february',
// 		'march',
// 		'april',
// 		'may',
// 		'june',
// 		'july',
// 		'august',
// 		'september',
// 		'october',
// 		'november',
// 		'december',
// 	],
// };
// let lang = 'ru';
// let month = 5;
// document.write (months[lang][month])

// Задача №2

// let affairs = {
// 	'2018': {
// 		11: {
// 			29: ['дело111', 'дело112', 'дело113'],
// 			30: ['дело121', 'дело122', 'дело123'],
// 		},
// 		12: {
// 			30: ['дело211', 'дело212', 'дело213'],
// 			31: ['дело221', 'дело222', 'дело223'],
// 		},
// 	},
// 	'2019': {
// 		12: {
// 			29: ['дело311', 'дело312', 'дело313'],
// 			30: ['дело321', 'дело322', 'дело323'],
// 			31: ['дело331', 'дело332', 'дело333'],
// 		}
// 	},
// }
// let year = '2019';
// let month = 12;
// let day = 30;
// document.write (affairs[year][month][day][2]) // вывели дело "дело332"

// let employees = [
// 	{
// 		name: 'name1',
// 		salary: 300,
// 	},
// 	{
// 		name: 'name2',
// 		salary: 400,
// 	},
// 	{
// 		name: 'name3',
// 		salary: 500,
// 	},
// ];
// document.write (employees[0]['salary'] + employees[1]['salary']) // сумма зарплат первого и второго работников

// let students = {
// 	'boys':  ['Коля', 'Вася', 'Петя'],
// 	'girls': ['Даша', 'Маша', 'Лена'],
// };
// document.write (students['boys'][1] + '</br>');
// document.write (students['girls'][2])

// let employees = [
// 	{
// 		name: 'name1',
// 		salary: 300,
// 	},
// 	{
// 		name: 'name2',
// 		salary: 400,
// 	},
// 	{
// 		name: 'name3',
// 		salary: 500,
// 	},
// ];
// for (let employee of employees) {
//     document.write (employee.name + ' - ' + employee.salary + '</br>') 
// } // данные каждого работника в формате имя - зарплата

// let sum = 0;
// for (let employee of employees) {
//     sum += employee.salary;
// } // данные каждого работника в формате имя - зарплата
// document.write ('Сумма зп всех сотрудников - ' + sum) 

// let employees = [
// 	{
// 		name: 'name1',
// 		salary: 300,
// 		age: 28,
// 	},
// 	{
// 		name: 'name2',
// 		salary: 400,
// 		age: 29,
// 	},
// 	{
// 		name: 'name3',
// 		salary: 500,
// 		age: 30,
// 	},
// 	{
// 		name: 'name4',
// 		salary: 600,
// 		age: 31,
// 	},
// 	{
// 		name: 'name5',
// 		salary: 700,
// 		age: 32,
// 	},
// ];
// let sum = 0;
// for (let employee of employees) {
//     if (employee.age >= 30){
//         sum += employee.salary
//     }
// }
// document.write ('Сумма зп всех сотрудников (30+ лет) - ' + sum) 

// let employees = [
// 	{
// 		name: 'name1',
// 		salary: 300,
// 		dismissed: false,
// 	},
// 	{
// 		name: 'name2',
// 		salary: 400,
// 		dismissed: true,
// 	},
// 	{
// 		name: 'name3',
// 		salary: 500,
// 		dismissed: false,
// 	},
// 	{
// 		name: 'name4',
// 		salary: 600,
// 		dismissed: true,
// 	},
// 	{
// 		name: 'name5',
// 		salary: 700,
// 		dismissed: false,
// 	},
// ];
// for (let employee of employees) {
//     if (employee.dismissed == false){
//         document.write (employee.name + ' - salary ' + employee.salary + '</br>')         
//     }
// }

// let data = {
// 	1: [
// 		'data11',
// 		'data12',
// 		'data13',
// 	],
// 	2: [
// 		'data21',
// 		'data22',
// 		'data23',
// 	],
// 	3: [
// 		'data31',
// 		'data32',
// 		'data33',
// 		'data34',
// 		'data35',
// 	],
// 	4: [
// 		'data41',
// 		'data42',
// 	],
// };
// for (let set in data) {
//     for (let elem of data[set]) {
//         document.write (elem + '</br>')
//     }
// }

// let data = [
// 	{
// 		1: 'data11',
// 		2: 'data12',
// 		3: 'data13',
// 		4: 'data14',
// 	},
// 	{
// 		1: 'data21',
// 		2: 'data22',
// 		3: 'data33',
// 	},
// 	{
// 		1: 'data31',
// 		2: 'data32',
// 	},
// ];
// for (let data_group of data) {
//     for (let elem in data_group) {
//         document.write (data_group[elem] + '</br>')
//     }
// }

let data = [
	{
		1: [
			'data111',
			'data112',
			'data113',
		],
		2: [
			'data121',
			'data122',
			'data123',
		],
	},
	{
		1: [
			'data211',
			'data212',
			'data213',
		],
		2: [
			'data221',
			'data222',
			'data223',
			'data224',
		],
		3: [
			'data231',
			'data232',
			'data233',
			'data234',
			'data235',
		],
	},
	{
		1: [
			'data411',
			'data412',
			'data413',
		],
		2: [
			'data421',
		],
	},
];
for (let obj of data) {
    for (let arr in obj) {
        document.write (obj[arr] + '</br>')
    }
}

























































































































































