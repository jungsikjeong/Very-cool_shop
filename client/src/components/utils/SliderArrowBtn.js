import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

const Container = styled.div``;

const NextArrow = styled.div`
  right: 0;
  width: 100%;
  z-index: 1;
  padding: 1rem 4rem 1rem 1rem;
  width: 3.5rem;
  height: 4.8rem;
  :before {
    font-size: 3rem;
  }
`;

const PrevArrow = styled.div`
  left: 0;
  width: 100%;
  z-index: 1;
  padding: 1rem;
  width: 3.5rem;
  height: 4.8rem;
  :before {
    font-size: 3rem;
  }
`;

export const SliderNextArrow = (props) => {
  const isMobile = useMediaQuery({
    query: '(max-width:767px)',
  });

  const { className, style, onClick } = props;
  return <NextArrow className={className} onClick={onClick} />;
};

export const SliderPrevArrow = (props) => {
  const isMobile = useMediaQuery({
    query: '(max-width:767px)',
  });

  const { className, style, onClick } = props;
  return <PrevArrow className={className} onClick={onClick} />;
};
