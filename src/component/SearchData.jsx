import React from 'react';

function SearchData({page, record, onChange, onSearch}) {

    return (
        <div>
            <input name='page' placeholder='페이지' value={page} onChange={onChange} />
            <input name='record' placeholder='한 페이지 결과 수' value={record} onChange={onChange} />
            <button onClick={onSearch}>조회</button>
        </div>
    );
}

export default SearchData;