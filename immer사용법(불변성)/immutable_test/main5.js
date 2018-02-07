import { Map } from 'immutable';

let data1 = Map({ 
  name: '홍길동', 
  contacts : Map({  mobile:'010-2121-3232',  office:'02-3421-5678' })
})
let data12 = data1.set('name', '이몽룡')
let data13 = data12.setIn(['contacts','mobile'], '010-9999-9999')
console.log(data13.get('name'))
console.log(data13.getIn(['contacts', 'office']))

let data21 = Map({ name:"성춘향", age:20 })
let data22 = Map({ age:30, type:"A" })
let data23 = data21.merge(data22)
console.log(data23.toJS())

let data3 = Map({ a:100, b:200 })
let data31 = data3.update('a', val=>val+50)
console.log(data3.toJS())
console.log(data31.toJS())
