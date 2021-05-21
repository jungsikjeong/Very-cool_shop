import React from 'react';
import styled from 'styled-components';
import SliderJS from './Sections/Slider/Slider';

import { useMediaQuery } from 'react-responsive';

const Container = styled.div`
  color: black;
  overflow-x: hidden;
`;

const MainPage = () => {
  const isMobile = useMediaQuery({
    query: '(max-width:767px)',
  });

  return (
    <Container>
      <SliderJS />
    </Container>
  );
};

export default MainPage;
