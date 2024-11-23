import axios from "axios";

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

export default axiosModule;
