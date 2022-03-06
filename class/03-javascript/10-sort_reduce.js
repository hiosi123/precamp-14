//배열 재정열

let arr = [1,5,4,2,3];
arr.sort();
console.log(arr);


let arr1 = [27, 8, 5, 13]; // sort 는 str 으로 값을 받기 때문에 앞에 숫자만 보고 판단한다 이경우 다른 방법으로 풀어줘야 한다
arr1.sort();
console.log(arr1);


arr1.sort((a,b) => {
    return a-b;
})

console.log(arr1);

arr1.sort((a,b) => {
    return b-a;
})

console.log(arr1);

//리듀스

let arr3 = [1,2,3,4,5];

let result = 0;

arr3.forEach((num) =>{
    result +=num;
})

console.log(result);

const result1 = arr.reduce((prev,cur) => {
    return prev + cur;
},0)

console.log(result1);

let userList = [
    {name: 'Mike', age:30},
    {name: 'Nacy', age:20},
    {name: 'Simon', age:31},
    {name: 'Mikey', age:9},
    {name: 'Jae', age:28},
];

let result3 = userList.reduce((prev, cur) => {
    if (cur.age > 10) {
        prev.push(cur.name);
    }
    return prev;
},[])

console.log(result3);

let result4 = userList.reduce((prev, cur) => {
    return (prev +=cur.age);
},0);

console.log(result4);

let result5 = userList.reduce((prev, cur) => {
    if (cur.name.length === 3) {
        prev.push(cur.name);
    }
    return prev;
},[]);

console.log(result5);

// arr.reduceRight(); 배열 우측부터 시작하고 기능은 위에 배운 reduce 와 동일함