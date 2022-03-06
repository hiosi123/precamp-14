//구조 분해 할당 
// 구조 분해 할당 구문은 배열이나 객체의 속성을 분해해서 그 값을 변수에 담을 수 있게 하는 표현식

let [x,y] = [1,2];
console.log(x);
console.log(y);

let users = ['Mike', 'Tom', 'Jane'];
let [user1, user2, user3] = users;
console.log(user1);
console.log(user2);
console.log(user3);

let str = 'Mike-Tom-Jane';
let [user4, user5, user6] = str.split('-'); //split 은 문자열을 잘라서 배열 형태로 담아둔다
console.log(user4);
console.log(user5);
console.log(user6);

let [a,b,c] = [1,2]
console.log(c);

let [e =2,f =3,g=4] = [1,2]
console.log(g);

// let h=1
// let i=2
// [h,i] = [i,h];
// console.log(i);
// console.log(h);

//객체 구조분해 

let user = {name: 'Mike', age: 30};
let {name, age} = user;

console.log(name); // let name = user.name;
console.log(age); // let age = user.age;

let user11 = {name: 'Mike', age: 30};
// undefined
let {name: userName, age:userAge} = user11;
// undefined
userName
// 'Mike'
userAge
// 30