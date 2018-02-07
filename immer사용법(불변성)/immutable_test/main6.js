import { List } from 'immutable';

const arr1 = List([100,200,300,400])
const arr2 = arr1.push(999)
//[100,200,300,400,999]
console.log(arr2.toJS())

const arr3 = arr2.shift()
//[200,300,400,999]
console.log(arr3.toJS())

const arr4 = arr3.unshift(1,2)
//[1,2,200,300,400,999]
console.log(arr4.toJS())

const arr5 = arr4.insert(2,"hello")
//[1,2,"hello", 200,300,400,999]
console.log(arr5.toJS())

const arr6 = arr5.update(4, x=>x+5)
//[1,2,"hello", 200,305,400,999]
console.log(arr6.toJS())

const arr7 = arr6.delete(1)
//[1,"hello", 200,305,400,999]
console.log(arr7.toJS())
