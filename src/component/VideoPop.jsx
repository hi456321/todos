import React from "react";

function VideoPop({ youtubeId, toggleModal }) {
  // 유튜브 url에 youtubeId이것만 붙이면 영상 나옴
  // 유튜브 url은 상수로 선언해서 가져다 쓸 것
  console.log(youtubeId);
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
                data=""
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoPop;
