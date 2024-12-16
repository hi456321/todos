import React from "react";

// 스타일 객체는 전역변수로 선언
const imageStyle = {
  width: "100%",
  height: "300px",
};

// toggleModal을 props로 계속 넘기게 됨.. 프로바이더로 감싸서 드릴링 하는게 나아 보임
// 우선 스터디 목적이니 그냥 이대로 작성..
function YoutubeItem({ youtubeItem, toggleModal }) {
  // 스타일 같으 자주 변경되지 않는 변수는 컴포넌트 내에 작성 지양
  // 랜더링 될 때마다 계속 재선언 됨.. 전역 변수로 빼는 게 나음..
  //   const imageStyle = {
  //     width: "100%",
  //     height: "300px",
  //   };

  const sliceTitle = (title) => {
    if (title.length > 30) {
      return title.slice(0, 30) + "....";
    }
  };

  const sliceDate = (date) => {
    return date.slice(0, 10);
  };

  return (
    <div className="col">
      <div
        className="card shadow-sm"
        onClick={() => toggleModal(true, youtubeItem)}
      >
        <img
          className="imageStyle"
          src={youtubeItem.snippet.thumbnails.high.url}
          style={imageStyle}
        />
        <div className="card-body">
          <h5 className="card-text">{sliceTitle(youtubeItem.snippet.title)}</h5>
          <div className="d-flex justify-content-between align-items-center">
            <small className="text-muted">
              {sliceDate(youtubeItem.snippet.publishedAt)}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

function YoutubeList({ youtubeList, toggleModal }) {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {youtubeList.map((item) => (
          <YoutubeItem
            key={item.id.videoId}
            youtubeItem={item}
            toggleModal={toggleModal}
          />
        ))}
      </div>
    </div>
  );
}

export default YoutubeList;
