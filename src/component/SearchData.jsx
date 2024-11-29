import React, {useState} from 'react';
import axiosModule from "../utils/axios/axios";

const url = process.env.REACT_APP_DATA_API_URL;
const serviceKey = process.env.REACT_APP_DATA_API_KEY;

const SearchData = ({setDataArr}) => {

    const [inputs, setInputs] = useState({
        page: '1',
        record: '10'
      });

    const onChange = e => {
        const {name, value} = e.target;
        setInputs({
          ...inputs,
          [name]: value
        });
      };

      const onSearch = async () => {

        const response = await axiosModule({ type: 'get', url, params: { serviceKey, pageIndex: inputs.page, recordCountPerPage: inputs.record }});
    
          if(response !== null) {
            const items = response.data.response.body.items;
            setDataArr(items);
          }
    
      };

    return (
        <div>
            <input name='page' placeholder='페이지' value={inputs.page} onChange={onChange} />
            <input name='record' placeholder='한 페이지 결과 수' value={inputs.record} onChange={onChange} />
            <button onClick={onSearch}>조회</button>
        </div>
    );
}

export default SearchData;