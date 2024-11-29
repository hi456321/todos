import React, {useState} from "react";
import SearchData from "./component/SearchData";
import DataList from "./component/DataList";

function App() {

  const [dataArr, setDataArr] = useState([]);

  return (
    <>
      <h1>전국어린이놀이시설우수시설정보서비스</h1>
      <br />
      <SearchData setDataArr={setDataArr} />
      <br />
      <DataList dataArr={dataArr} />
    </>
  );
}

export default App;
