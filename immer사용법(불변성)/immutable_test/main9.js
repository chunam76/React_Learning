import { Map, List, Record, fromJS } from 'immutable'

let quiz = Record({
    "students" : 
          Record(["홍길동", "성춘향", "박문수", "변학도" ])(),
    "description" : "기본상식을 물어보는 테스트",
    "quizlist": Record([
      Record({
        "question": "한국 프로야구 팀이 아닌것은?",
        "options": Record([
            Record({ "no":1, "option":"삼성라이온스" })(),
            Record({ "no":2, "option":"기아타이거스" })(),
            Record({ "no":3, "option":"두산베어스" })(),
            Record({ "no":4, "option":"LA다져스" })()
        ])(),
        "answer": 4
      })(),
      Record({
        "question": "2018년 크리스마스는 무슨 요일인가?",
        "options": Record([
            Record({ "no":1, "option":"월" })(),
            Record({ "no":2, "option":"화" })(),
            Record({ "no":3, "option":"수" })(),
            Record({ "no":4, "option":"목" })()
        ])(),
        "answer": 2
      })()
    ])()
})()

let quiz2 = quiz.setIn(
    ['quizlist', 0, 'options', 0, 'option'], 'LG트윈스')

// console.log(quiz === quiz2)
// console.log(quiz.quizlist === quiz2.quizlist)
// console.log(quiz.quizlist[0] === quiz2.quizlist[0])
// console.log(quiz.quizlist[0].options === quiz2.quizlist[0].options)
// console.log(quiz.quizlist[0].options[0] === quiz2.quizlist[0].options[0])
// console.log(quiz.quizlist[1].options[0] === quiz2.quizlist[1].options[0])
// console.log(quiz.students == quiz2.students)

console.log(quiz === quiz2)
console.log(quiz.get('quizlist') === quiz2.get('quizlist'))
console.log(quiz.get('quizlist').get(0) === quiz2.get('quizlist').get(0))
console.log(quiz.get('quizlist').get(0).get('options') === quiz2.get('quizlist').get(0).get('options'))
console.log(quiz.get('quizlist').get(0).get('options').get(0) === quiz2.get('quizlist').get(0).get('options').get(0))
console.log(quiz.get('quizlist').get(1).get('options').get(0) === quiz2.get('quizlist').get(1).get('options').get(0))
console.log(quiz.get('students') == quiz2.get('students'))