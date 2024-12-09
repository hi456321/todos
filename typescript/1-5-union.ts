{
    /**
     * Union Types: OR
     */
    type Direction = 'left' | 'right' | 'up' | 'down';
    function move(direction: Direction){
        console.log(direction)
    }
    move('down')

    type TileSize = 8 | 16 | 32;
    const tile: TileSize = 16;

    // function: login -> success, fail

    type LoginSuccess = {
        response: {
            body: string;
        }
    }

    type LoginFail = {
        reason: string;
    }

    type LoginState = LoginSuccess | LoginFail;

    function printLoginState(state: LoginState){
        if('response' in state){
            console.log(state.response.body)
        }else{
            console.log(state.reason)
        }
    }
}