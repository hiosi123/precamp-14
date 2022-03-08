const user = {
    name:'Mike'
}

user.hasOwnProperty('name');
//true

const car = {
    wheels: 4,
    drive() {
        console.log("drive...")
    },
}

const bmw = {
    color: 'red',
    navigagtion: 1,
};

const benz = {
    color: 'black',
    navigation: 1,
};

const audi = {
    color: 'blue',
};

bmw.__proto__ = car;
benz.__proto__= car;
audi.__protp__ = car;

console.log(bmw.wheels)

const x5 = {
    color: 'white', 
    name: 'x5',
}

x5.__proto__ =bmw;

console.log(x5.wheels)

for (p in x5) {
    console.log(p);
}

console.log(x5)

console.log(Object.keys(x5));

for (p in x5) {
    if(x5.hasOwnProperty(p)) {
        console.log('o',p);
    } else {
        console.log('x',p);
    }
}


const Benz = function (color) {
    const c = color;
    this.getColor = function () {
        console.log(c);
    }
}

Benz.prototype.wheels = 4;
Benz.prototype.drive = function () {
    console.log('drive..');
};

const C = new Benz('blue');

console.log(C.wheels);

console.log(C instanceof Benz)

console.log(C.constructor === Benz)

C.getColor('black')