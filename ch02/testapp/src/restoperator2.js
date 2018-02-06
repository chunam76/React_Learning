spread operator
let arr = [10, 20, 30];
let arr2 = [40, 50, ...arr];
console.log(arr2);

let obj = {name : '홍길동', age:20};
let obj2 = {tel:'010-1010-3035', ...obj};
console.log(obj2);

let p2 = {name : '홍길동', age:20, gender:'M'};
let {}