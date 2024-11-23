import React, {useState} from "react";
import axios from "axios";
import SearchData from "./component/SearchData";
import DataList from "./component/DataList";

function App() {
  const [inputs, setInputs] = useState({
    page: '1',
    record: '10'
  });
  const {page, record} = inputs;
  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const [dataArr, setDataArr] = useState([]);

  const onSearch = () => {
    axios.get(process.env.DATA_API_URL, {
      params: {
        serviceKey: process.env.DATA_API_KEY,
        pageIndex: page,
        recordCountPerPage: record
      }
    }).then(response => {
        console.log('api 응답 ==>');
        console.log(response);
    });
  };

  return (
    <>
      <h1>전국어린이놀이시설우수시설정보서비스</h1>
      <br />
      <SearchData page={page} record={record} onChange={onChange} onSearch={onSearch} />
      <br />
      <DataList />
    </>
  );
}

export default App;
