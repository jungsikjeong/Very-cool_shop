import React from 'react';
import styled from 'styled-components';
import { AiOutlineMenu } from 'react-icons/ai';

const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  h1 {
    margin-left: 12px;
  }
`;

const MobileMenu = () => {
  return (
    <Container>
      <AiOutlineMenu size={21} />
      <h1>V E L L A</h1>
    </Container>
  );
};

export default MobileMenu;
