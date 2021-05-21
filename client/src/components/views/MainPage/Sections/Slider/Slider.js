import React from 'react';
import styled, { css } from 'styled-components';
import Slider from 'react-slick';
import { useMediaQuery } from 'react-responsive';
import bannerPc from '../../../../../assets/images/banner.png';
import bannerM from '../../../../../assets/images/banner-m.png';

const SliderStyle = styled(Slider)`
  /* width: 100%; */
  overflow: hidden;
`;

const Inner = styled.div`
  /* height: 600px; */

  img {
    width: 100%;
    max-width: 100%;
    /* height: 600px; */
  }
`;

// 테스트용도
const imgArray = [
  {
    src: bannerPc,
  },
  {
    src: '',
  },
  {
    src: '',
  },
  {
    src: '',
  },
  {
    src: '',
  },
];

const SliderJS = () => {
  const isMobile = useMediaQuery({
    query: '(max-width:767px)',
  });

  const settings = {
    appendDots: (dots) => (
      <div
        style={{
          padding: '50px',
        }}
      >
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </div>
    ),
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,

    // responsive: [
    //   {
    //     breakpoint: 2000,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       variableWidth: true,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       dots: false,
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };
  return (
    <SliderStyle {...settings}>
      {imgArray.map((item) => (
        <>
          {isMobile ? (
            <Inner>
              <img src={bannerM} alt="" />
            </Inner>
          ) : (
            <Inner>
              <img src={bannerPc} alt="" />{' '}
            </Inner>
          )}
        </>
      ))}
    </SliderStyle>
  );
};

export default SliderJS;
