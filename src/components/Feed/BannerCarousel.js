import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Button } from "react-bootstrap";
import "../../styles/feed/banner.scss";

const BANNER = props => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  };
  return (
    <React.Fragment>
      <Slider {...settings}>
        <div className="slide slide-1">
          <Container>
            <div className="slide-content">
              <div>In the mood for new</div>
              <h1>Korean Styles</h1>
              <Button className="shop-now" variant="light">
                Shop Now
              </Button>{" "}
            </div>
          </Container>
        </div>
        <div className="slide slide-2">
          <Container>
            <div className="slide-content">
              <h1>20% Discount on all Tee Shirts</h1>
              <Button className="shop-now" variant="light">
                Shop Now
              </Button>{" "}
            </div>
          </Container>
        </div>
      </Slider>
    </React.Fragment>
  );
};

export default BANNER;
