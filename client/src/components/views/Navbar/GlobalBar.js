import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { GoSearch } from 'react-icons/go';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { AiOutlineLogin } from 'react-icons/ai';
import { RiShoppingBagLine } from 'react-icons/ri';
import { BsFillPersonFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import SubMenuSHOP from './sections/SubMenu/SubMenuSHOP';
import SubMenuUNISEX from './sections/SubMenu/SubMenuUNISEX';
import SubMenuSALE from './sections/SubMenu/SubMenuSALE';
import SubMenuCOMMUNICATE from './sections/SubMenu/SubMenuCOMMUNICATE';
import MobileMenu from './sections/MobileMenu/MobileMenu';

const Container = styled.header`
  width: 100%;
  position: relative;
  color: black;
  z-index: 100;

  @media (max-width: 1024px) {
  }

  @media (max-width: 768px) {
  }

  .icons {
    font-size: 1.25rem;
  }

  .search-icon {
    font-size: 1rem;
  }
`;

const TopMenuWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3rem;
  padding: 2rem 1.5rem;
  font-size: 1.5rem;
  opacity: 1;
  visibility: visible;

  &.Fixed {
    opacity: 0;
    visibility: hidden;
  }
`;

const Logo = styled.h1`
  font-weight: bold;
  white-space: pre-wrap;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid black;
  width: 20rem;
  height: 1.5rem;
`;

const Input = styled.input`
  width: 100%;
  text-indent: 5px;
  padding: 0;
  border: none;
  background: none;
  outline-style: none;

  ::placeholder {
    color: black;
  }
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const Utility = styled.div`
  display: flex;

  &.Fixed {
    display: flex;
    margin-left: auto;
  }

  .icons-wrap {
    display: flex;
    padding: 0 0 0 1rem;
    align-items: center;
    flex-direction: column;

    span {
      font-size: 0.65rem;
      font-weight: bold;
      margin-top: 0.1rem;
    }
  }
`;

const GlobalNav = styled.nav`
  width: 100%;
  height: 3.5rem;
  position: relative;
  background: #0b0b0d;
  z-index: 100;
  color: #fff;

  &.Fixed {
    position: fixed;
    top: 0;
    left: 0;
    padding: 2rem 1.5rem;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    li {
      padding: 0 1.25rem;
    }
  }
`;

const SLink = styled(Link)`
  transition: 0.2s ease-in-out;
  font-size: 1rem;
  line-height: 12px;

  :hover {
    color: #06bd9e;
  }
`;

const GlobalBar = () => {
  const [HoverState, setHoverState] = useState('');
  const [PageYOffset, setPageYOffset] = useState(0);
  const [Fixed, setFixed] = useState(false);

  const hoverHandler = (hoverState) => {
    setHoverState(hoverState);
  };

  const scrollHandler = useCallback(() => {
    const { pageYOffset } = window;
    setFixed(PageYOffset > 40);
    setPageYOffset(pageYOffset);
  }, [PageYOffset]);

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);

    return () => window.removeEventListener('scroll', scrollHandler);
  }, [scrollHandler]);

  return (
    <Container>
      <TopMenuWrap className={Fixed && 'Fixed'}>
        <Link to="/">
          <Logo>
            V I N T A G E <br />V E L L A
          </Logo>
        </Link>

        <SearchBar>
          <Input type="text" placeholder="리뷰 깔쌈하게 남기고 10% 쿠폰받자" />
          <Button>
            <GoSearch className="icons search-icon" />
          </Button>
        </SearchBar>

        <Utility>
          <Link to="#">
            <div className="icons-wrap">
              <AiOutlineUserAdd className="icons" />
              <span>JOIN</span>
            </div>
          </Link>
          <Link to="#">
            <div className="icons-wrap">
              <AiOutlineLogin className="icons" />
              <span>LOGIN</span>
            </div>
          </Link>
          <Link to="#">
            <div className="icons-wrap">
              <RiShoppingBagLine className="icons" /> <span>0</span>
              {/* 나중에 length로 수량을 받아올 예정 */}
            </div>
          </Link>
        </Utility>
      </TopMenuWrap>

      <GlobalNav className={Fixed && 'Fixed'}>
        <ul>
          {/* 스크롤 아래로 내려서 GlobalNav display: fixed;가 되면 활성화됨 */}
          {Fixed && (
            <div style={{ marginRight: 'auto' }}>
              <Link to="/">
                <h1 className={Fixed && 'Fixed'}>
                  V I N T A G E <br />V E L L A
                </h1>
              </Link>
            </div>
          )}
          <li
            onMouseEnter={() => hoverHandler('shop')}
            onMouseLeave={() => hoverHandler('')}
          >
            <SLink to="#">SHOP</SLink>
            {/* 서브 메뉴 */}
            <SubMenuSHOP HoverState={HoverState} />
          </li>
          <li
            onMouseEnter={() => hoverHandler('unisex')}
            onMouseLeave={() => hoverHandler('')}
          >
            <SLink to="#">UNISEX & BRAND</SLink>
            {/* 서브 메뉴 */}
            <SubMenuUNISEX HoverState={HoverState} />
          </li>
          <li
            onMouseEnter={() => hoverHandler('sale')}
            onMouseLeave={() => hoverHandler('')}
          >
            <SLink to="#">SALE</SLink>
            {/* 서브 메뉴 */}
            <SubMenuSALE HoverState={HoverState} />
          </li>

          <li
            onMouseEnter={() => hoverHandler('communicate')}
            onMouseLeave={() => hoverHandler('')}
          >
            <SLink to="#">COMMUNICATE</SLink>
            {/* 서브 메뉴 */}
            <SubMenuCOMMUNICATE HoverState={HoverState} />
          </li>

          {/* 스크롤 아래로 내려서 GlobalNav display: fixed;가 되면 활성화됨 */}
          {Fixed && (
            <Utility className={Fixed && 'Fixed'}>
              <Link to="#">
                <div className="icons-wrap">
                  <GoSearch className="icons" />
                  <span>SEARCH</span>
                </div>
              </Link>
              <Link to="#">
                <div className="icons-wrap">
                  <BsFillPersonFill className="icons" />
                  <span>MY</span>
                </div>
              </Link>
              <Link to="#">
                <div className="icons-wrap">
                  <RiShoppingBagLine className="icons" /> <span>0</span>
                  {/* 나중에 length */}
                </div>
              </Link>
            </Utility>
          )}
        </ul>
      </GlobalNav>
    </Container>
  );
};

export default GlobalBar;
