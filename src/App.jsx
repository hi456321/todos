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
    axios.get("https://apis.data.go.kr/1741000/exfc4/getExfc4", {
      params: {
        serviceKey: 'Xd4qzzVK7H8aEvngC/CUy9SM3dADxWscfd5BLkgKGL/SjKScVpzAPN8yLCgkioioqQWqS174F5n4icaYAcwozg==',
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
