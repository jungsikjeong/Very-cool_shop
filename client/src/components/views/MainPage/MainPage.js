import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

import stickyBanner1 from '../../../assets/images/banner/stickyBanner01.jpg';
import stickyBanner2 from '../../../assets/images/banner/stickyBanner02.jpg';

import SliderJS from './Sections/Slider/Slider';
import WhatsNew from './Sections/WhatsNew/WhatsNew';
import StyleStorySection from './Sections/StyleStory/StyleStorySection';
import Footer from '../Footer/Footer';

const Container = styled.div`
  color: black;
  overflow-x: hidden;
  /* padding-top: 4.5rem; */
  /* height: 100vh; */
  @media (min-width: 800px) {
  }

  .style-story-title {
    margin-top: 5rem;
    text-transform: uppercase;
    margin-bottom: 2rem;
    height: 52px;
    color: #333;
    font-family: 'ProximaNova-Thin';
    font-weight: 100;
    font-size: 2.4rem;
    text-transform: uppercase;
    text-align: center;
  }
`;

const StickyBanner = styled.div`
  @media (min-width: 800px) {
    overflow: hidden;
    margin-top: 5rem;
    margin-bottom: 3rem;
  }

  ul {
    @media (min-width: 800px) {
      display: flex;
      justify-content: center;
      width: 100%;
    }
  }

  li {
    @media (min-width: 800px) {
      width: 100%;
      background: #ffdf00;
      :first-child {
        text-align: right;
        background: black;
      }
    }
    img {
    }
  }
`;

const SLink = styled(Link)``;

const MainPage = () => {
  const isMobile = useMediaQuery({
    query: '(max-width:767px)',
  });

  return (
    <Container>
      <SliderJS />

      {/* 스타일 스토리 섹션 */}
      {isMobile ? '' : <h2 className="style-story-title">style story</h2>}
      <StyleStorySection />

      {/* 고정배너, 모바일에선 안보임 */}
      {isMobile ? (
        ''
      ) : (
        <StickyBanner>
          <ul>
            <li>
              <Link to="#">
                <img src={stickyBanner1} alt="" />
              </Link>
            </li>

            <li>
              <Link to="#">
                <img src={stickyBanner2} alt="" />
              </Link>
            </li>
          </ul>
        </StickyBanner>
      )}

      {/* 새로운 아이템 소식 섹션 */}
      <WhatsNew />

      {/* 바닥 */}
      <Footer />
    </Container>
  );
};

export default MainPage;
