/**
 * Discriminated Union Type (구별 된 유니온 타입)
 * 구별 할 수 있는 속성(아래에서는 result)를 넣어 구별하기 쉽게 함
 */
{
    type LoginSuccess = {
        result: 'success'
        response: {
            body: string;
        }
    }

    type LoginFail = {
        result: 'fail'
        reason: string;
    }

    type LoginState = LoginSuccess | LoginFail;

    function printLoginState(state: LoginState){
        if(state.result === 'success'){
            console.log(state.response.body)
        }else{
            console.log(state.reason)
        }
    }
}