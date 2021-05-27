import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import newProduct01 from '../../../../../assets/images/whatsNew/img_new_product01.png';
import newProduct03 from '../../../../../assets/images/whatsNew/img_new_product03.png';
import newProduct02 from '../../../../../assets/images/whatsNew/img_new_product02.png';
import newProduct04 from '../../../../../assets/images/whatsNew/img_new_product04.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;

  h3 {
    color: #333;
    font-weight: 300;
    font-size: 1.25rem;
    line-height: 1.5rem;
    text-align: center;
    margin-bottom: 1rem;
    text-transform: uppercase;
    position: relative;

    @media (min-width: 800px) {
      font-size: 2.4rem;
    }
  }
`;

const SliderStyle = styled(Slider)`
  @media (min-width: 800px) {
    padding: 0.5rem 0;
    height: 32.05rem;
  }
  width: 100%;
  margin-bottom: 3.75rem;
  padding: 0 1.25rem;
  overflow: hidden;
`;

const Inner = styled.div`
  @media (min-width: 800px) {
  }
  padding-right: 0.5rem;
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const NewItemWrap = styled.div`
  @media (min-width: 800px) {
    width: 365px;
    height: 492px;
    padding: 0;
    margin: 0;
    border: none;
    /* margin-left: 0px; */
    /* margin-right: 20px; */
  }
  width: 100%;
  height: 100%;
  text-align: center;
  border: 1px solid #eaeaea;
  border-radius: 0.125rem;
  padding-bottom: 0.5rem;
`;

const SLink = styled(Link)`
  color: #000;
  font-weight: 500;
  width: 100%;
  height: 100%;
  :hover {
    color: black;
  }

  .image {
    @media (min-width: 800px) {
      width: 100%;
      height: 100%;
      margin: 0 auto;
    }
    width: 3.75rem;
    height: 5rem;
    margin: 1rem auto 0.4375rem;

    img {
      width: 100%;
      max-width: 100%;
      height: 100%;
    }
  }

  span {
    @media (min-width: 800px) {
    }

    font-size: 0.8rem;
    font-weight: 600;
    text-align: center;
  }
`;

const WhatsNew = () => {
  const isMobile = useMediaQuery({
    query: '(max-width:767px)',
  });

  const settings = {
    className: 'center',
    centerMode: true,
    centerPadding: '10px',
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <Container>
      <h3>What's New</h3>
      <SliderStyle {...settings}>
        <Inner>
          <NewItemWrap>
            <SLink to="#">
              <div className="image">
                <img src={newProduct01} alt="" />
              </div>
              <span>TOP</span>
            </SLink>
          </NewItemWrap>
        </Inner>

        <Inner>
          <NewItemWrap>
            <SLink to="#">
              <div className="image">
                <img src={newProduct02} alt="" />
              </div>
              <span>BOTTOM</span>
            </SLink>
          </NewItemWrap>
        </Inner>

        <Inner>
          <NewItemWrap>
            <SLink to="#">
              <div className="image">
                <img src={newProduct03} alt="" />
              </div>
              <span>BAG</span>
            </SLink>
          </NewItemWrap>
        </Inner>

        <Inner>
          <NewItemWrap>
            <SLink to="#">
              <div className="image">
                <img src={newProduct04} alt="" />
              </div>
              <span>ACC</span>
            </SLink>
          </NewItemWrap>
        </Inner>
      </SliderStyle>
    </Container>
  );
};

export default WhatsNew;
