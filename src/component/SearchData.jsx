import React from 'react';

function SearchData() {

    return (
        <div>
            <input name='page' placeholder='페이지' />
            <input name='record' placeholder='한 페이지 결과 수' />
            <button>조회</button>
        </div>
    );
}

export default SearchData;