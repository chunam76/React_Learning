// global.age = 0;
var age = 0;
function Person(name, yearCount) {
    this.name = name;
    this.age = 0;

    incrAge = incrAge.bind(this);
    for (var i = 1; i <= yearCount; i++) {
        incrAge();
    }
    function incrAge() {
        this.age++;
    }
}

var p1 = new Person("홍길동", 20);
console.log(p1.name + "님의 나이 : " + p1.age);
console.log(p1.name + "님의 나이 : " + age);