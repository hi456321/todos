import React, { useState, useEffect } from "react";
import axios from "axios";

const Api = () => {

    //useState는 컴포넌트에 state 변수를 추가할 수 있으며 두 개의 값을 가진 배열을 반환함
    //1번 변수는 기본 상태이며, 2번 변수가 상태를 업데이트하는 상태 업데이트함수
    const [data, setData] = useState([]); 
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const URL = 'http://apis.data.go.kr/6430000/exemplBizService1/getExemplBiz1'; // API URL 수정

    //fetchData는 비동기적으로 URL에서 데이터 가져옴
    const fetchData = async () => {
        try {
            setError(null);
            setData([]); //데이터를 배열로 초기화
            setLoading(true); // 로딩 상태 시작

            const response = await axios.get(URL, { // 비동기적으로 axios 호출
                params: {
                    serviceKey: 'mZYKcPSIadB3EFo7waUB8GBhn7pwHCkA9IkaMZhDY0ntbRqGwnkl+AckmKPQ7vCRQiVcI2OBiB6Y8gBZ//TiXQ==', // process.env.REACT_APP_API_KEY
                    numOfRows: 10,
                    pageNo: 1
                }
            });
            
            console.log("응답 데이터 확인:", response.data);

        // 응답 데이터 처리
        if (response.data && response.data.body && response.data.body.length > 0) {
            // 응답된 데이터를 배열에 저장
            setData(response.data.body);
        } else {
            setError(new Error("데이터가 없습니다."));
        }
    } catch (e) {
        setError(e); // 오류 처리
    }
    setLoading(false); // 로딩 상태 종료
};
    //useEffect 컴포넌트가 렌더링 될 때마다 특정 작업 실행함
    useEffect(() => {
        fetchData(); // 컴포넌트가 마운트되면 데이터 요청
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>; 
    if (!data) return <div>No data available</div>;

    return (
        <div>
            {data.map((item, index) => ( // 데이터를 반복 처리
                <div key={index}>
                    <p>업소명 : {item.BSSH_NM}</p>
                    <p>세부 주소 : {item.DETAIL_ADRES}</p>
                    <p>메뉴 : {item.MENU}</p>
                    <p>전화번호 : {item.TELNO}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default Api;