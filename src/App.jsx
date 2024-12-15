import React, { useState } from "react";
import axiosModule from "./utils/axios";
import YoutubeList from "./component/YoutubeList";
import sampleResponse from "./sampleResponse";
import VideoPop from "./component/VideoPop";

const url = process.env.REACT_APP_YOUTUBE_API_URL;
const key = process.env.REACT_APP_YOUTUBE_API_KEY;

const sample = sampleResponse;

function App() {
  console.log(sample);

  const [modal, setModal] = useState(false);
  const [youtubeId, setYoutbeId] = useState("");
  // closeModal 말고 togleModal로 하나 만들어서 토글 시키는 게 좋을 듯..
  // 모달이 영상을 보여주는 게 목적이라면 영상 썸네일 클릭시 toggleModal(true, video_id)와 같이 하면 어떨 지?
  // 모달을 닫을 때는 toggleModal(false)로.. 단순 state 변경이 아닌 로직이 필요한 경우에는 함수로 빼는 게 좋음..
  // toggleModal을 YoutubeList 컴포넌트에 props로 넘겨주면 될 거 같음..

  const toggleModal = (isActive = false, id) => {
    setModal(isActive);
    setYoutbeId(id);
    // youtube_id가 있으면서 isActive가 true인 경우
  };

  const closeModal = () => {
    console.log("closeModal called!!!");
    setModal(false);
  };

  // API 테스트는 못하니, 배열에 find로 조회하는 정도로 Search 기능 구현하면 될 듯
  // * onSearch 함수 사용.. 검색 기능은 있어야 함
  const onSearch = async () => {
    const response = await axiosModule({
      type: "get",
      url,
      params: { key, part: "snippet", type: "video", q: "로제+아파트" },
    });

    if (response !== null) {
      console.log(response);
    }
  };

  return (
    <>
      {/*<h1>Youtube 검색</h1>
      <button onClick={onSearch}>조회</button>
      <button onClick={() => setModal(true)}>모달켜기</button>*/}
      <main>
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Album example</h1>
              <p className="lead text-muted">
                Something short and leading about the collection below—its
                contents, the creator, etc. Make it short and sweet, but not too
                short so folks don’t simply skip over it entirely.
              </p>
              <p>
                <a href="#" className="btn btn-primary my-2">
                  Main call to action
                </a>
                <a href="#" className="btn btn-secondary my-2">
                  Secondary action
                </a>
              </p>
            </div>
          </div>
        </section>
        <div className="album py-5 bg-light">
          <YoutubeList
            youtubeList={sample.data.items}
            toggleModal={toggleModal}
          />
          {modal && (
            <VideoPop youtubeId={youtubeId} toggleModal={toggleModal} />
          )}
        </div>
      </main>
    </>
  );
}

export default App;
