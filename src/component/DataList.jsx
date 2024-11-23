import React from "react";

function Data({data}) {
    return (
        <tr>
            <td>{data.pfctNm}</td><td>{data.dsgnYmd}</td><td>{data.instNm}</td>
        </tr>
    );
}

function DataList() {
    const dataArr = [
        {"exfcSn":"891","dsgnYmd":"20121018","pfctSn":"529870","rgnCd":"3011011000","fctyCd":"15","rgnNm":null,"pfctNm":"대동펜타뷰아파트어린이놀이터2","rmk":"대전광역시 우수어린이놀이시설 / 대전광역시 공고 제2012-1247호","instSn":"0","instNm":"시스템운영관리자","latCrtsVl":"36.327546","lotCrtsVl":"127.4458504"},
        {"exfcSn":"887","dsgnYmd":"20120928","pfctSn":"38146","rgnCd":"4128510100","fctyCd":"82","rgnNm":null,"pfctNm":"위시티일산자이아파트2단지 210동 놀이터","rmk":"경기 고양시","instSn":"0","instNm":"시스템운영관리자","latCrtsVl":"37.677304","lotCrtsVl":"126.8137384"},
        {"exfcSn":"879","dsgnYmd":"20120924","pfctSn":"35234","rgnCd":"4480025600","fctyCd":"6","rgnNm":null,"pfctNm":"충청남도교육청유아교육원","rmk":"유효기간 만료(5년)로 우수 어린이놀이시설 지정취소  / 안전개선과-2070(2017.11.29)","instSn":"1","instNm":"행정안전부","latCrtsVl":"36.6510991","lotCrtsVl":"126.7228558"},
        {"exfcSn":"878","dsgnYmd":"20120928","pfctSn":"509343","rgnCd":"4159031000","fctyCd":"7","rgnNm":null,"pfctNm":"화성매송 휴먼시아아파트 107동앞 놀이터","rmk":"경기 화성시","instSn":"0","instNm":"시스템운영관리자","latCrtsVl":"37.2665737","lotCrtsVl":"126.8799828"},
        {"exfcSn":"866","dsgnYmd":"20121010","pfctSn":"521467","rgnCd":"3120010300","fctyCd":"35","rgnNm":null,"pfctNm":"농소어린이집 놀이터","rmk":"울산광역시 2012-3 (울산광역시 민방위재난관리과-15740호 2012.10.10 )","instSn":"0","instNm":"시스템운영관리자","latCrtsVl":"35.6457349","lotCrtsVl":"129.3584296"},
        {"exfcSn":"864","dsgnYmd":"20120928","pfctSn":"20461","rgnCd":"4139010100","fctyCd":"27","rgnNm":null,"pfctNm":"청구1차아파트놀이터","rmk":"경기 시흥시","instSn":"0","instNm":"시스템운영관리자","latCrtsVl":"37.4468612","lotCrtsVl":"126.7950683"},
        {"exfcSn":"862","dsgnYmd":"20120928","pfctSn":"34165","rgnCd":"4117300000","fctyCd":"73","rgnNm":null,"pfctNm":"무궁화마을금호아파트 내 놀이터","rmk":"우수 어린이놀이시설 경기도 제2012-924호","instSn":"0","instNm":"시스템운영관리자","latCrtsVl":"37.3833652","lotCrtsVl":"126.9559449"},
        {"exfcSn":"890","dsgnYmd":"20121023","pfctSn":"501181","rgnCd":"4413111400","fctyCd":"23","rgnNm":null,"pfctNm":"천안일봉유치원 놀이시설","rmk":"안전교육 1회 면제 (지정일로부터 도래하는 안전교육에 대하여 1회 면제) 관련 : 충청남도 재난민방위과-11845(2012.10.23.)호 및 천안시청 재난안전과-11732(2012.10.29.)호.","instSn":"0","instNm":"시스템운영관리자","latCrtsVl":"36.7997982","lotCrtsVl":"127.1384023"},
        {"exfcSn":"928","dsgnYmd":"20120928","pfctSn":"529260","rgnCd":"4115010400","fctyCd":"147","rgnNm":null,"pfctNm":"청룡보듬이나눔어린이집 놀이터","rmk":"우수 어린이 놀이시설 지정(경기도 제2012-021) 및 경기도지사 표창","instSn":"0","instNm":"시스템운영관리자","latCrtsVl":"37.7315413","lotCrtsVl":"127.0567956"},
        {"exfcSn":"889","dsgnYmd":"20121023","pfctSn":"40296","rgnCd":"4477025300","fctyCd":"14","rgnNm":null,"pfctNm":"서천사곡휴먼시아아파트어린이놀이터","rmk":"2012년도 충청남도 우수어린이놀이시설 선정","instSn":"0","instNm":"시스템운영관리자","latCrtsVl":"36.0847774","lotCrtsVl":"126.6854067"}
    ];

    return (
        <table>
            <tr>
                <th>놀이시설명</th><th>우수시설지정일</th><th>조직명</th>
            </tr>
            {
                dataArr.map(item => (
                    <Data data={item} key={item.exfcSn} />
                ))
            }
        </table>
    );
}

export default DataList;