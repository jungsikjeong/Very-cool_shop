import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { useMediaQuery } from 'react-responsive';
import bannerPc01 from '../../../../../assets/images/banner.png';
import bannerPc02 from '../../../../../assets/images/bannerPc02.jpg';
import bannerPc03 from '../../../../../assets/images/bannerPc03.jpg';
import bannerM from '../../../../../assets/images/banner-m.png';
import {
  SliderNextArrow,
  SliderPrevArrow,
} from '../../../../utils/SliderArrowBtn';

const SliderStyle = styled(Slider)`
  /* width: 100%; */
  overflow: hidden;
`;

const Inner = styled.div`
  /* height: 600px; */

  img {
    width: 100%;
    max-width: 100%;
    height: 15rem;

    @media (min-width: 800px) {
      height: 30rem;
    }
  }
`;

// 테스트용도
const pcImgArray = [
  {
    src: bannerPc01,
  },
  {
    src: bannerPc02,
  },
  {
    src: bannerPc03,
  },
  {
    src: bannerPc02,
  },
];

const mobileImgArray = [
  {
    src: bannerM,
  },
  {
    src: bannerPc02,
  },
  {
    src: bannerPc03,
  },
  {
    src: bannerM,
  },
];

const SliderJS = () => {
  const isMobile = useMediaQuery({
    query: '(max-width:767px)',
  });

  const settings = {
    appendDots: (dots) => (
      <div
        className="test"
        style={{
          padding: '2.5rem',
        }}
      >
        <ul style={{ margin: '0px' }}>{dots}</ul>
      </div>
    ),
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  const settingsPc = {
    appendDots: (dots) => (
      <div
        className="test"
        style={{
          padding: '2.5rem',
        }}
      >
        <ul style={{ margin: '0px' }}>{dots}</ul>
      </div>
    ),

    nextArrow: <SliderNextArrow />,
    prevArrow: <SliderPrevArrow />,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
  };
  return (
    <>
      {isMobile ? (
        <SliderStyle {...settings}>
          {mobileImgArray.map((item, index) => (
            <Inner key={index}>
              <img src={item.src} alt="" />
            </Inner>
          ))}
        </SliderStyle>
      ) : (
        <SliderStyle {...settingsPc}>
          {pcImgArray.map((item, index) => (
            <Inner key={index}>
              <img src={item.src} alt="" />
            </Inner>
          ))}
        </SliderStyle>
      )}
    </>
  );
};

export default SliderJS;
