import React from "react";

function VideoPop({url, closeModal}) {
    const thisHide = () => {
        console.log('모달 창 닫기 !!');
    };

    return (
        <div className="modal" tabindex="-1" style={{display: 'block'}}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
                    </div>
                    <div className="modal-body">
                        <div className="video-container" style={{textAlign: 'center'}}>
                            <object type="text/html" width="100%" height="500" data={url} allowFullScreen/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoPop;