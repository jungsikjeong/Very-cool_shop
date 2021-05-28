import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { useMediaQuery } from 'react-responsive';
import bannerPc01 from '../../../../../assets/images/banner/banner.png';
import bannerPc02 from '../../../../../assets/images/banner/bannerPc02.jpg';
import bannerM from '../../../../../assets/images/banner/banner-m.png';
import bannerM02 from '../../../../../assets/images/banner/banner-m02.jpg';
import bannerM03 from '../../../../../assets/images/banner/banner-m03.jpg';
import {
  SliderNextArrow,
  SliderPrevArrow,
} from '../../../../utils/SliderArrowBtn';
import { Link } from 'react-router-dom';

const SliderStyle = styled(Slider)`
  overflow: hidden;
  margin-bottom: 3rem;
`;

const Inner = styled.div`
  position: relative;
  z-index: 1;

  img {
    width: 100%;
    max-width: 100%;
    height: 27rem;
    max-height: 27.65rem;
    display: block;

    @media (min-width: 800px) {
      height: 30rem;
    }
  }
`;

const TextWrap = styled.div`
  position: absolute;
  left: 2rem;
  bottom: 4rem;
  z-index: 10;
  text-align: left;
  color: #fff;
  @media (min-width: 800px) {
    position: absolute;
    top: 50%;
    left: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
  }

  h1 {
    @media (min-width: 800px) {
      font-size: 5rem;
      transform: rotate(6deg);
    }
    font-size: 2.3rem;
    color: #fff;
    font-family: 'Dancing Script', cursive;
    font-weight: 400;
  }

  p {
    margin: 1.5rem 0;
    font-size: 0.7rem;
  }
`;

const SLink = styled(Link)`
  :hover {
    color: #fff;
  }

  button {
    font-size: 0.9rem;
    padding: 0.6rem;
    background: 0 0;
    border: 1px solid #fff;
    outline: none;
    cursor: pointer;
  }
`;

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
          <Inner>
            <SLink to="#">
              <img src={bannerM} alt="" />
            </SLink>
          </Inner>

          <Inner>
            <img src={bannerM02} alt="" />
            <TextWrap>
              <h1>vintage vella</h1>
              <p>일상 속 작은 기쁨</p>
              <SLink to="#">
                <button>10%세일 + 리뷰이벤트</button>
              </SLink>
            </TextWrap>
          </Inner>

          <Inner>
            <SLink to="#">
              <img src={bannerM03} alt="" />
            </SLink>
          </Inner>
        </SliderStyle>
      ) : (
        <SliderStyle {...settingsPc}>
          <Inner>
            <SLink to="#">
              <img src={bannerPc01} alt="" />
            </SLink>
          </Inner>

          <Inner>
            <img src={bannerPc02} alt="" />
          </Inner>

          <Inner>
            <SLink to="#">
              <img src={bannerM02} alt="" />
              <TextWrap>
                <h1>vintage vella</h1>
                <p>일상 속 작은 기쁨</p>
                <SLink to="#">
                  <button>10%세일 + 리뷰이벤트</button>
                </SLink>
              </TextWrap>
            </SLink>
          </Inner>
        </SliderStyle>
      )}
    </>
  );
};

export default SliderJS;
