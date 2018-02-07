import { Map, List, fromJS } from 'immutable'

let quiz = fromJS({
    "students" : ["홍길동", "성춘향", "박문수", "변학도" ],
    "description" : "기본상식을 물어보는 테스트",
    "quizlist": [
      {
        "question": "한국 프로야구 팀이 아닌것은?",
        "options": [
            { "no":1, "option":"삼성라이온스" },
            { "no":2, "option":"기아타이거스" },
            { "no":3, "option":"두산베어스" },
            { "no":4, "option":"LA다져스" }
        ],
        "answer": 4
      },
      {
        "question": "2018년 크리스마스는 무슨 요일인가?",
        "options": [
            { "no":1, "option":"월" },
            { "no":2, "option":"화" },
            { "no":3, "option":"수" },
            { "no":4, "option":"목" }
        ],
        "answer": 2
      }
    ]
})

let quiz2 = quiz.setIn(
    ['quizlist', 0, 'options', 0, 'option'], 'LG트윈스')

console.log(quiz === quiz2)
console.log(quiz.get('quizlist') === quiz2.get('quizlist'))
console.log(quiz.get('quizlist').get(0) 
   === quiz2.get('quizlist').get(0))
console.log(quiz.get('quizlist').get(0).get('options') 
   === quiz2.get('quizlist').get(0).get('options'))
console.log(quiz.get('quizlist').get(0).get('options').get(0) 
   === quiz2.get('quizlist').get(0).get('options').get(0))
console.log(quiz.get('quizlist').get(1).get('options').get(0) 
   === quiz2.get('quizlist').get(1).get('options').get(0))
console.log(quiz.get('students') == quiz2.get('students'))
