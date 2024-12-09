/**
 * Let's make a game 🕹
 */

type MoveType = 'up' | 'down' | 'left' | 'right'

type MoveResult = {
    x: number 
    y: number 
}

const position: MoveResult ={
    x: 0,
    y: 0
}

const move = (moveType: MoveType) => {
    switch(moveType) {
        case 'up':
            position.y = position.y + 1
            break; 
        case 'down':
            position.y = position.y - 1
            break; 
        case 'left':
            position.x = position.x - 1
            break; 
        case 'right':
            position.x = position.x + 1
            break; 
    }
}

console.log(position); // { x: 0, y: 0}
move('up');
console.log(position); // { x: 0, y: 1}
move('down');
console.log(position); // { x: 0, y: 0}
move('left');
console.log(position); // { x: -1, y: 0}
move('right');
console.log(position); // { x: 0, y: 0}
