import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import "./index.css";

class ReactSlickDemo extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="container">
        <Slider {...settings}>
          <div>
            <img src="http://placekitten.com/g/400/200" alt="" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" alt="" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" alt="" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}

ReactDOM.render(<ReactSlickDemo />, document.getElementById("container"));
