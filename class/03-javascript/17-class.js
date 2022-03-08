const User = function(name, age) {
    this.name = name;
    this.age = age;
    this.showName = function () {
        console.log(this.name);
    }
}

const mike = new User('Mike', 30);

class User2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;

    }
    showName() {
        console.log(this.name);
    }
}

const tom = new User2('Tom', 19);

console.log(mike.showName)
console.log(tom.showName)

// Class 에서의 상속
// extends

class Car {
    constructor(color) {
        this.color = color;
        this.wheels = 4;
    }
    drive() {
        console.log('drive..');
    }
    stop() {
        console.log('Stop');
    }
}

class Bmw extends Car {
    constructor(color) {
        super(color); // 부모 객체의 this 를 불러와야함
        this.navigation = 1;
    }
    park() {
        console.log('PARK');
    }
    stop() {  //동일한 연산자를 사용할 경우 덮어 쓰기 된다.
        super.stop(); //부모의 연산자를 들고 오고싶을 경우/ 이런 방식을 오버라이딩
        console.log('OFF');
    }
}

const z4 = new Bmw('blue');
z4.drive()
z4.park()
z4.stop()

z4.navigation