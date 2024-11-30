import React from "react";

function YoutubeItem({youtubeItem, key}) {
    // console.log(youtubeItem)

    const imageStyle = {
        width: '100%',
        height: '300px'
    };

    const sliceTitle = title => {
        if(title.length > 30) {
            return title.slice(0, 30) + '....';
        }
    }

    const sliceDate = date => {
        return date.slice(0, 10);
    }

    return (
        <div className="col">
            <div className="card shadow-sm">
                <img className="imageStyle" src={youtubeItem.snippet.thumbnails.high.url} style={imageStyle} />
                <div className="card-body">
                    <h5 className="card-text">{sliceTitle(youtubeItem.snippet.title)}</h5>
                    <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">{sliceDate(youtubeItem.snippet.publishedAt)}</small>
                    </div>
                </div>
            </div>
        </div>
    );
}

function YoutubeList({youtubeList}) {
    // 여기 왜 jsx 문법 안써요..
    return (
    <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {
            youtubeList.map(item => (
                <YoutubeItem youtubeItem={item} key={item.id.videoId} />
            ))
        }
        </div>
    </div>
    )
}

export default YoutubeList;