function showName(name) {
    console.log(name);
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);
}

showName('Mike');

function add(...numbers) {
    let result = 0;
    numbers.forEach((num) => {
        result +=num;
    })
    return result;
}
// undefined
add(1,2,3);
// 6
add(4,5,6);
// 15

function User(name, age, ...skills) { // 나머지 매개변수는 항상 마지막에 있어야한다
    this.name = name;
    this.age = age;
    this.skills = skills;
}

const user2 = new User('Tom', 20, 'JS', 'React');
// undefined

// User {name: 'Tom', age: 20, skills: Array(2)}
// age: 20
// name: "Tom"
// skills: (2) ['JS', 'React']
// [[Prototype]]: Object



// 전개 구문 (spread syntax)

let arr1 = [1,2,3];
let arr2 = [4,5,6];

let result = [0, ...arr1, ...arr2, 7,8,9];

let arr=[1,2,3];
let arr2 = [...arr]; // 별개로 복제된다

let user = {name:'Mike', age:30};
let user2 = {...user} // 별개로 복제된다

user2.name = 'Tom';

let arr1 = [1,2,3];
let arr2 = [4,5,6];
// undefined
let arr3 =[...arr2, ...arr1]
// undefined
arr3
// (6) [4, 5, 6, 1, 2, 3]