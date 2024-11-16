import React from 'react';

function Todo({ todo }) {
    
    return (
        <tr>
            <td>{todo.todo}</td><td>{todo.period}</td><td><button>삭제</button></td>
        </tr>
    );
};

function TodoList({ todos }) {
    /*
    const todos = [
        {
            id: 1,
            todo: "밥먹기",
            period: "오늘까지"
        }
    ];
    */

    return (
        <table>
            <th>할 일</th><th>기한</th><th>삭제</th>
            {todos.map(todo => (
                <Todo todo={todo} key={todo.id} />
            ))}
        </table>
    );
};

export default TodoList;