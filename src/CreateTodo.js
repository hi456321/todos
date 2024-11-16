import React from 'react';

function CreateTodo({todo, period, onChange, onCreate}) {

    return (
        <div>
            <input name='todo' placeholder='할 일' onChange={onChange} value={todo} />
            <input name='period' placeholder='기한' onChange={onChange} value={period} />
            <button onClick={onCreate}>추가</button>
        </div>
    );
}

export default CreateTodo;