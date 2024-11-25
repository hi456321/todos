import axios from "axios";
import React, { useState, useEffect } from "react";
import './App.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';
import TextField from '@mui/material/TextField'; // 검색을 위한 입력창 컴포넌트

function App() {
  const [data, setData] = useState(null);  // 데이터를 저장할 상태
  const [loading, setLoading] = useState(true);  // 로딩 상태
  const [error, setError] = useState(null);      // 에러 상태
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
  const [totalRows, setTotalRows] = useState(0); // 총 데이터 개수 (전체 페이지 계산에 사용)
  const [searchQuery, setSearchQuery] = useState(''); // 검색어 상태 추가

  const apiUrl = 'http://apis.data.go.kr/6430000/exemplBizService1/getExemplBiz1';

  // 비동기 함수로 데이터 요청
  const fetchData = async (page, query = '') => {
    try {
      // axios로 API 호출
      const response = await axios.get(apiUrl, {
        params: {
          serviceKey:
            "mZYKcPSIadB3EFo7waUB8GBhn7pwHCkA9IkaMZhDY0ntbRqGwnkl+AckmKPQ7vCRQiVcI2OBiB6Y8gBZ//TiXQ==",  // 인증키 (URL 인코딩된 상태)
          currentPage: page,  // 현재 페이지 번호
          perPage: 10,     // 한 페이지에 표시할 데이터 수
          searchQuery: query, // 검색어
        },
      });

      // 응답 데이터 설정
      setData(response.data);  // 데이터 상태 업데이트
      setLoading(false);       // 로딩 완료
      setTotalRows(response.data.header.totalRows); // 전체 데이터 수 설정
    } catch (error) {
      setError(error);        // 에러 상태 업데이트
      setLoading(false);      // 로딩 완료
    }
  };

  // 컴포넌트 마운트 시 데이터 요청
  useEffect(() => {
    fetchData(currentPage, searchQuery); // 검색어와 페이지를 고려해서 데이터를 요청
  }, [currentPage, searchQuery]); // currentPage 또는 searchQuery가 변경될 때마다 데이터를 새로 요청

  // 로딩 중일 때
  if (loading) return <div>Loading...</div>;

  // 에러가 발생한 경우
  if (error) return <div>Error: {error.message}</div>;

  // 데이터가 없으면 아무것도 출력하지 않음
  if (!data) return null;

  // 페이지 변경 함수
  const handlePageChange = (event, value) => {
    setCurrentPage(value);  // 선택된 페이지 번호로 상태 업데이트
  };

  // 검색어 변경 함수
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value); // 검색어 상태 업데이트
    setCurrentPage(1); // 검색어가 변경되면 첫 번째 페이지부터 다시 시작
  };

  return (
    <div>
      <h1>청주 맛집 리스트</h1>
      
      {/* 검색 입력창 추가 */}
      <TextField
        label="검색어를 입력하세요"
        variant="outlined"
        fullWidth
        value={searchQuery}
        onChange={handleSearchChange}
        sx={{ marginBottom: 2 }}  // 간격 설정
      />

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="restaurant table">
          <TableHead>
            <TableRow>
              <TableCell>업소명</TableCell>
              <TableCell align="center">지역</TableCell>
              <TableCell align="center">주소</TableCell>
              <TableCell align="center">전화번호</TableCell>
              <TableCell align="center">메뉴</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.body && data.body.map((restaurant, index) => (
              <TableRow key={index}>
                <TableCell>{restaurant.BSSH_NM}</TableCell>
                <TableCell align="center">{restaurant.SIGUN_NM}</TableCell>
                <TableCell align="center">{restaurant.DETAIL_ADRES}</TableCell>
                <TableCell align="center">{restaurant.TELNO}</TableCell>
                <TableCell align="center">{restaurant.MENU}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* 페이지네이션 추가 */}
      <Pagination
        count={Math.ceil(totalRows / 10)}  // 전체 페이지 수 계산
        page={currentPage}  // 현재 페이지
        onChange={handlePageChange}  // 페이지 변경 처리 함수
        color="primary"
        sx={{ marginTop: 3, display: 'flex', justifyContent: 'center' }} // 스타일 설정
      />
    </div>
  );
}

export default App;