import React, {useState} from "react";
import SearchData from "./component/SearchData";
import DataList from "./component/DataList";
import axiosModule from "./utils/axios/axios";

const url = process.env.REACT_APP_DATA_API_URL;
const serviceKey = process.env.REACT_APP_DATA_API_KEY;

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

  const onSearch = async () => {

    const response = await axiosModule({ type: 'get', url, params: { serviceKey, pageIndex: page, recordCountPerPage: record }});

      if(response !== null) {
        console.log(response);
        // setState
      }

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
