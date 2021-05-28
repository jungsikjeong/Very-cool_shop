import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import newProduct01 from '../../../../../assets/images/whatsNew/img_new_product01.png';
import newProduct03 from '../../../../../assets/images/whatsNew/img_new_product03.png';
import newProduct02 from '../../../../../assets/images/whatsNew/img_new_product02.png';
import newProduct04 from '../../../../../assets/images/whatsNew/img_new_product04.png';
import pcNewProduct01 from '../../../../../assets/images/whatsNew/pc_new_product01.jpg';
import pcNewProduct02 from '../../../../../assets/images/whatsNew/pc_new_product02.jpg';
import pcNewProduct03 from '../../../../../assets/images/whatsNew/pc_new_product03.jpg';
import pcNewProduct04 from '../../../../../assets/images/whatsNew/pc_new_product04.jpg';

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

    .slick-slide.slick-center .image {
      width: 100%;
      height: 100%;
    }
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
    text-align: left;
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
      width: 287px;
      height: 382px;
      margin: 1rem 0;
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

  .product {
    padding: 0 0.25rem;

    .product-title {
      text-transform: uppercase;
      height: auto;
      margin-top: 0.85rem;
      margin-bottom: 0.45rem;
    }

    .product-content {
      max-height: 2.1rem;
      margin-top: 0.15rem;
      margin-bottom: 0;
      color: #555;
      font-size: 0.6rem;
    }
  }
  .price {
    position: relative;
    margin-top: 1.1rem;
    line-height: 100%;
    margin-bottom: 0.5rem;

    .price-discount {
      margin-right: 1rem;
      font-size: 0.9rem;
      color: #333;
    }

    .price-base {
      color: #808080;
      font-size: 0.7rem;
      text-decoration: line-through;
    }
    .price-discount_rate {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      font-size: 0.8rem;
      color: #ff4000;
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
    className: 'slider variable-width',
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    variableWidth: true,
  };

  const settingsPC = {
    className: 'center',
    centerMode: true,
    centerPadding: '0',
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
  };

  return (
    <Container>
      <h3>What's New</h3>
      {isMobile ? (
        // Mobile
        <SliderStyle {...settings}>
          <Inner style={{ width: '105px' }}>
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
      ) : (
        // PC
        <SliderStyle {...settingsPC}>
          <Inner>
            <NewItemWrap>
              <SLink to="#">
                <div className="image">
                  <img src={pcNewProduct01} alt="" />
                  <div className="product">
                    <div className="product-title">ONEPIECE</div>
                    <div className="product-content">
                      그런지무드 후드 탑/원피스
                    </div>

                    <div className="price">
                      <span className="price-discount">₩13,000</span>
                      <span className="price-base">₩26,000</span>
                      <span className="price-discount_rate">50%</span>
                    </div>
                  </div>
                </div>
              </SLink>
            </NewItemWrap>
          </Inner>

          <Inner>
            <NewItemWrap>
              <SLink to="#">
                <div className="image">
                  <img src={pcNewProduct02} alt="" />
                  <div className="product">
                    <div className="product-title">BAG</div>
                    <div className="product-content">아이보리 코로셋 가방</div>

                    <div className="price">
                      <span className="price-discount">₩21,000</span>
                    </div>
                  </div>
                </div>
              </SLink>
            </NewItemWrap>
          </Inner>

          <Inner>
            <NewItemWrap>
              <SLink to="#">
                <div className="image">
                  <img src={pcNewProduct03} alt="" />
                  <div className="product">
                    <div className="product-title">underwear</div>
                    <div className="product-content">1 + 1 SET</div>

                    <div className="price">
                      <span className="price-discount">₩35,000</span>
                    </div>
                  </div>
                </div>
              </SLink>
            </NewItemWrap>
          </Inner>

          <Inner>
            <NewItemWrap>
              <SLink to="#">
                <div className="image">
                  <img src={pcNewProduct04} alt="" />
                  <div className="product">
                    <div className="product-title">random box</div>
                    <div className="product-content">랜덤의류 증정💘</div>

                    <div className="price">
                      <span className="price-discount">₩3,000</span>
                    </div>
                  </div>
                </div>
              </SLink>
            </NewItemWrap>
          </Inner>
        </SliderStyle>
      )}
    </Container>
  );
};

export default WhatsNew;
