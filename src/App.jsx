import React from "react";
import axios from "axios";

const url = "https://www.googleapis.com/youtube/v3/search";
const key = "AIzaSyB1WGfZWy0unpgOQMLm3-MBj4Zib_JuUjA";

/**
 * @param data type, url, param을 받아 response를 리턴
 */
const axiosModule = async (data) => {
  try {
    const response = await axios[data.type](data.url, { params: data.params });
    
    if (response.status === 200) {
      return response; 
    } else {
      console.log(`Request failed with status: ${response.status}`);
      return null; 
    }
  } catch (error) {
    console.log('axios error!!', error);
    return null; 
  }
};

function App() {

  const onSearch = async () => {

    const response = await axiosModule({ type: 'get', url, params: { key, part: 'snippet', q: '로제+아파트'}});

    if(response !== null) {
      console.log(response);
    }

  };

  return (
    <>
      <h1>Youtube 검색</h1>
      <button onClick={onSearch}>조회</button>
    </>
  );
}

export default App;
