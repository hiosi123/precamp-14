document.write(1+1);
let child = "철수";
console.log(child);

child = '영희';
console.log(child);

const age = "13"; //13은 문자이므로 계산이 안됨!!
console.log(age);

// age= 12; //const는 다시 못 넣음(재할당 안됨!!)
// console.log(age);

const myMoney= 10000;
console.log(myMoney);

//"13" + 2 // 132
const classmates = ['철수', '영희','훈이']
// undefined
classmates
// (3) ['철수', '영희', '훈이']
classmates[0]
// '철수'
classmates[1]
// '영희'
classmates[2]
// '훈이'
classmates.includes('훈이')
// true
// true
// true
// false
// false
true===false
// false
true===true
// true
false===false
// true
classmates.push('맹구');
// 4
classmates
// (4) ['철수', '영희', '훈이', '맹구']
classmates.push('맹구');
// 5
classmates
(5) ['철수', '영희', '훈이', '맹구', '맹구']
classmates.includes('맹구');
// true
classmates.pop()
// '맹구'
classmates.pop()
// '맹구'
classmates.shift()
// '철수'
classmates
// (2) ['영희', '훈이']
classmates.unshift('철수');
// 3
classmates
// (3) ['철수', '영희', '훈이']
classmates.length

developer = ['노력', '열정', '반복', '컴퓨터 처럼 생각','아이디어']
// (5) ['노력', '열정', '반복', '컴퓨터 처럼 생각', '아이디어']
developer[3]
// '컴퓨터 처럼 생각'
dream = ['커리어점프', '성공', '할수있다']
// (3) ['커리어점프', '성공', '할수있다']
developer.concat(dream)
// (8) ['노력', '열정', '반복', '컴퓨터 처럼 생각', '아이디어', '커리어점프', '성공', '할수있다']

