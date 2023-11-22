import Carousel from "react-bootstrap/Carousel";
import foto1 from "../assets/1.JPG";
import foto2 from "../assets/2.JPG";
import foto3 from "../assets/3.JPG";
import foto4 from "../assets/4.JPG";
import foto5 from "../assets/5.JPG";
import foto6 from "../assets/6.jpg";
import foto7 from "../assets/7.jpg";
import doa from "../assets/doaplasa.JPG";
import cat1 from "../assets/cat1.jpg";
import cat2 from "../assets/cat2.jpg";

function gallery() {
  return (
    <>
      <div className="gallery">
        <div className="gallery-top">
          <img src={cat1} style={{width: "300px"}}></img>
          <img src={foto1}></img>
          <img src={foto3}></img>
        </div>
        <div className="gallery-mid">
          <img src={foto2} style={{ width: "50%" }}></img>
          <div className="gallery-slider">
            <Carousel fade className="carousel">
              <Carousel.Item>
                <img src={foto5} className="cimg"></img>
              </Carousel.Item>
              <Carousel.Item>
                <img src={foto6} className="cimg"></img>
              </Carousel.Item>
              <Carousel.Item>
                <img src={doa} className="cimg"></img>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        <div className="gallery-top">
          <img src={foto4}></img>
          <img src={foto7}></img>
          <img src={cat2} style={{width: "300px"}}></img>
        </div>
      </div>
    </>
  );
}

export default gallery;
