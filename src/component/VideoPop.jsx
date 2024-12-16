import React from "react";

const url = process.env.REACT_APP_YOUTUBE_URL;

function VideoPop({ youtubeItem, toggleModal }) {
  // 유튜브 url에 youtubeId이것만 붙이면 영상 나옴
  // 유튜브 url은 상수로 선언해서 가져다 쓸 것
  console.log(youtubeItem);
  return (
    <div className="modal" tabIndex="-1" style={{ display: "block" }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => toggleModal(false)}
            ></button>
          </div>
          <div className="modal-body">
            <div className="video-container" style={{ textAlign: "center" }}>
              <object
                type="text/html"
                width="100%"
                height="500"
                data={url+youtubeItem.id.videoId+"?rel=0"}
                allowFullScreen
              />
            </div>
            {/*
            <div class="d-flex flex-column align-items-stretch flex-shrink-0 bg-white" style="width: 750px;">
              <a href="/" class="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
                <svg class="bi me-2" width="30" height="24"><use xlink:href="#bootstrap"/></svg>
                <span class="fs-5 fw-semibold">관련 채널 동영상</span>
              </a>
              <div class="list-group list-group-flush border-bottom scrollarea" style="overflow-y: scroll; max-height: 350px">
                <a href="#" class="list-group-item list-group-item-action py-3 lh-tight">
                  <div v-for="item in playList">
                    <div class="d-flex w-100 align-items-center justify-content-between">
                    <strong class="mb-1">{youtubeItem.snippet.title}</strong>
                    <small class="text-muted" v-text="getLoadTxt(item.snippet.publishedAt,'date')"></small>
                    </div>
                    <div class="col-10 mb-1 small">
                      <img class="imageStyle" src="item.snippet.thumbnails.high.url" style="width:80%; height:300px;" />
                    </div>
                  </div>    
                </a>
              </div>
            </div>
            <div class="b-example-divider"></div>
            */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoPop;
