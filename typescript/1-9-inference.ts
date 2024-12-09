/**
 * Type Inference(타입추론)
 * 
 * 타입추론이란 데이터타입을 작성해주지 않아도 ts에서
 * 자동으로 데이터 타입을 추론해주는 것이다.
 * 예로 const temp = 1; 인 경우 데이터 타입을 작성하지는 않았지만
 * 변수 선언시 1이 들어갔기 때문에 temp는 number 타입으로 ts에서 인식한다.
 * 
 * 원시타입인 경우나 void인 경우에는 안써도 상관은 없지만
 * 가능하면 데이터 타입을 명시하는 게 직관적임.
 * 프로젝트시 팀원들과 협의하여 작성방법을 정하는 게 중요
 * 
 * 함수 파라메터에 데이터 타입을 선언하지 않으면
 * 기본적으로 any 타입이 들어감. 가능하면 파라메터에는
 * 데이터타입을 작성하는 게 좋음
 */
let text: string = 'hello'
function print(message) {
    console.log(message)
}

print('hello')
print(1)

function add(x: number, y: number){
    return x + y
}

const result = add(1,2);