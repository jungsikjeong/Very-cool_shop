import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SLink = styled(Link)`
  font-size: 10px;

  :hover {
    border-bottom: 1px solid black;
  }
`;

const SubMenuContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 1280px;
  margin: 0 auto;
  height: auto;
  background-color: rgba(245, 245, 245, 0.95);
  opacity: 0;
  visibility: hidden;
  transition: 0.3s ease-in-out;

  .wrapper {
    display: flex;
    align-items: flex-start;
    padding: 1.5rem 4rem;
    text-transform: uppercase;
    color: black;

    h1 {
      font-weight: bold;
      margin-bottom: 10px;
    }

    ul {
      display: flex;
      align-items: flex-start;
      flex-direction: column;

      li {
        padding: 0.2rem;
      }
    }
  }
`;

const SubMenuSHOP = ({ HoverState }) => {
  const ref = useRef();
  useEffect(() => {
    if (HoverState === 'shop') {
      ref.current.style.opacity = '1';
      ref.current.style.visibility = 'visible';
    } else {
      ref.current.style.opacity = '0';
      ref.current.style.visibility = 'hidden';
    }
  }, [HoverState]);
  return (
    <SubMenuContainer ref={ref}>
      <div className="wrapper">
        <ul>
          <h1>SHOP</h1>
          <li>
            <SLink to="#">top</SLink>
          </li>
          <li>
            <SLink to="#">onepiece</SLink>
          </li>
          <li>
            <SLink to="#">outer</SLink>
          </li>
          <li>
            <SLink to="#">bottom</SLink>
          </li>
          <li>
            <SLink to="#">set</SLink>
          </li>
          <li>
            <SLink to="#">acc</SLink>
          </li>
          <li>
            <SLink to="#">brand</SLink>
          </li>
          <li>
            <SLink to="#">sale</SLink>
          </li>
        </ul>
      </div>
    </SubMenuContainer>
  );
};

export default SubMenuSHOP;