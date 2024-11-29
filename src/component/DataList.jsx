import React from "react";

const DataList = ({dataArr}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>놀이시설명</th><th>우수시설지정일</th><th>조직명</th>
                </tr>
            </thead>
            <tbody>
                {dataArr.map(data => (
                    <tr key={data.exfcSn}>
                        <td>{data.pfctNm}</td><td>{data.dsgnYmd}</td><td>{data.instNm}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default DataList;