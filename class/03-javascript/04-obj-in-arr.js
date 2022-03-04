const classmates = [
    {name:'철수', age:13, school:'다람쥐 초등학교'},
    {name:'영희', age:8, school: '공룡 초등학교'},
    {name:'훈이', age:11, school: '거북이 초등학교'},
]
// undefined
classmates[0].name
// '철수'
classmates[1].age
// 8
classmates[2]
// {name: '훈이', age: 11, school: '거북이 초등학교'}
classmates
// (3) [{…}, {…}, {…}]0: {name: '철수', age: 13, school: '다람쥐 초등학교'}1: {name: '영희', age: 8, school: '공룡 초등학교'}2: {name: '훈이', age: 11, school: '거북이 초등학교'}length: 3[[Prototype]]: Array(0)
classmates.length
// 3
classmates[0]
// {name: '철수', age: 13, school: '다람쥐 초등학교'}
classmates[0].school
// '다람쥐 초등학교'
classmates[2].age
// 11