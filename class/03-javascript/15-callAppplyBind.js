// call apply bind 함수 호출 방식과 관계없이 this 를 지정할 수 있음

const mike = {
    name:'mike'
};

const tom = {
    name: "Tom"
};

function showThisName() {
    console.log(this.name);
}

showThisName.call(mike);
showThisName.call(tom);

function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
}


update.call(mike, 1999, "singer"); // 첫번째: 매개변수 this 로 사용될 값
console.log(mike);

const updateMike = update.bind(mike); // bind 를 사용해서 this 값을 고정 시킬수 있다. 
updateMike("1992", "teacher");
console.log(mike);

// update.call(tom, 1995, "developer");
// console.log(tom);

update.apply(tom, [1999, "singer"]); // 배열 요소를 함수 매개변수로 이용할 때 유용함
console.log(tom)

const nums = [3,10,1,6,4]
// const minNum = Math.min(...nums);
// console.log(minNum);

const minNum = Math.min.apply(null, nums); //apply 는 arry 로 받는다
console.log(minNum);

const maxNum = Math.max.call(null, ...nums); // 콜은 변수를 받는다
console.log(maxNum);