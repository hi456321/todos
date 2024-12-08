import React from "react";
import axiosModule from "./utils/axios";
import YoutubeList from "./component/YoutubeList";
import sampleResponse from "./sampleResponse";
import VideoPop from "./component/VideoPop";

const url = "https://www.googleapis.com/youtube/v3/search";
const key = "AIzaSyB1WGfZWy0unpgOQMLm3-MBj4Zib_JuUjA";

const sample = sampleResponse;

function App() {
  console.log(sample);

  const onSearch = async () => {

    const response = await axiosModule({ type: 'get', url, params: { key, part: 'snippet', type: 'video', q: '로제+아파트'}});

    if(response !== null) {
      console.log(response);
    }

  };

  return (
    <>
      {/*<h1>Youtube 검색</h1>
      <button onClick={onSearch}>조회</button>*/}
      <main>
        <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">Album example</h1>
          <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
          <p>
            <a href="#" className="btn btn-primary my-2">Main call to action</a>
            <a href="#" className="btn btn-secondary my-2">Secondary action</a>
          </p>
          </div>
        </div>
        </section>
        <div className="album py-5 bg-light">
          <YoutubeList youtubeList={sample.data.items}/>
        </div>
        <VideoPop />
      </main>
    </>
  );
}

export default App;
