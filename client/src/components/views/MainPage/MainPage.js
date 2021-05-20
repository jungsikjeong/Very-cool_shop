import React from 'react';
import styled from 'styled-components';
import SliderJS from './Sections/Slider/Slider';
import bannerPc from '../../../assets/images/banner.png';
import bannerM from '../../../assets/images/banner-m.png';

import { useMediaQuery } from 'react-responsive';

const Container = styled.div`
  /* width: 100%; */
  color: black;
  overflow-x: hidden;
`;

const BannerWrap = styled.div`
  img {
    width: 100%;
  }
`;

const MainPage = () => {
  const isMobile = useMediaQuery({
    query: '(max-width:767px)',
  });

  return (
    <Container>
      <BannerWrap>
        {isMobile ? (
          <img src={bannerM} alt="배너 이미지" />
        ) : (
          <img src={bannerPc} alt="배너 이미지" />
        )}
      </BannerWrap>
      {/* <SliderJS /> */}
    </Container>
  );
};

export default MainPage;
