import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.footer`
  /* margin-top: 3.75rem; */
  padding-bottom: 50px;
  background-color: #f1f1f1;
`;

const FooterBtn = styled.ul`
  display: flex;
  background: #aaa;

  li {
    position: relative;
    width: 25%;
    text-align: center;

    :not(:last-child)::before {
      content: '';
      display: block;
      width: 1px;
      height: 0.75rem;
      background-color: #fff;
      position: absolute;
      top: 50%;
      right: 0;
      margin-top: -0.375rem;
    }
  }
`;

const FooterContents = styled.div`
  text-align: center;
  padding-top: 40px;
  color: #666;
  line-height: 20px;
  font-size: 0.875rem;
  margin-bottom: 17px;
`;

const SLink = styled(Link)`
  display: block;
  font-size: 0.875rem;
  height: 2.5rem;
  color: #fff;
  line-height: 2.375rem;
  letter-spacing: -0.28px;

  :hover {
    color: #fff;
  }
`;

const Footer = () => {
  return (
    <Container>
      <FooterBtn>
        <li>
          <SLink to="#">로그인</SLink>
        </li>
        <li>
          <SLink to="#">고객센터</SLink>
        </li>
        <li>
          <SLink to="#">회사소개</SLink>
        </li>
        <li>
          <SLink to="#">이용약관</SLink>
        </li>
      </FooterBtn>
      <FooterContents>
        <span>작업자: 정중식</span>
      </FooterContents>
    </Container>
  );
};

export default Footer;
