import React from "react";
import BlogContext from "../../Context/blogContext";
import { HeaderPageView, SliderView, SliderText } from "./styledComponents";
import Slider from "react-slick";
import CustomArrow from "./arrow";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeaderSlicks = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <CustomArrow />,
    prevArrow: <CustomArrow />,
  };
  return (
    <BlogContext.Consumer>
      {(value) => {
        const { theme } = value;
        return (
          <HeaderPageView headercolor={theme.toString()}>
            <Slider {...settings}>
              <SliderView>
                <SliderText textcolor={theme.toString()}>Slide One</SliderText>
              </SliderView>
              <SliderView>
                <SliderText textcolor={theme.toString()}>Slide Two</SliderText>
              </SliderView>
              <SliderView>
                <SliderText textcolor={theme.toString()}>
                  Slide Three
                </SliderText>
              </SliderView>
              <SliderView>
                <SliderText textcolor={theme.toString()}>Slide Four</SliderText>
              </SliderView>
              <SliderView>
                <SliderText textcolor={theme.toString()}>Slide Five</SliderText>
              </SliderView>
              <SliderView>
                <SliderText textcolor={theme.toString()}>Slide Six</SliderText>
              </SliderView>
              <SliderView>
                <SliderText textcolor={theme.toString()}>
                  Slide Seven
                </SliderText>
              </SliderView>
              <SliderView>
                <SliderText textcolor={theme.toString()}>
                  Slide Eight
                </SliderText>
              </SliderView>
              <SliderView>
                <SliderText textcolor={theme.toString()}>Slide Nine</SliderText>
              </SliderView>
              <SliderView>
                <SliderText textcolor={theme.toString()}>Slide Ten</SliderText>
              </SliderView>
            </Slider>
          </HeaderPageView>
        );
      }}
    </BlogContext.Consumer>
  );
};

export default HeaderSlicks;
