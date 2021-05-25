import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { GoSearch } from 'react-icons/go';
import { RiShoppingBagLine } from 'react-icons/ri';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import MobileSideMenu from './sections/MobileSideMenu/MobileSideMenu';

const Container = styled.header`
  width: 100%;
  position: relative;
  color: black;
  z-index: 100;

  .icons {
    font-size: 1.5rem;
  }

  .search-icon {
    margin-top: 0.1rem;
  }

  .basket-icon {
    position: relative;
  }
`;

const TopMenuWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3rem;
  padding: 1.5rem 1rem;
  font-size: 1rem;
  opacity: 1;
  visibility: visible;

  &.Fixed {
    opacity: 0;
    visibility: hidden;
  }
`;

const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Logo = styled.h1`
  font-weight: bold;
  white-space: pre-wrap;
  margin-left: 0.6rem;
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

    .basket-length {
      position: absolute;
      top: 0.4rem;
      font-size: 0.8rem;
    }
  }
`;

const GlobalNav = styled.nav`
  width: 100%;
  height: 3.5rem;
  position: relative;
  padding: 0 0.6rem;
  background: #fff;
  z-index: 100;
  color: black;

  &.Fixed {
    position: fixed;
    top: 0;
    left: 0;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;

    li {
      padding: 0 0.5rem;
    }
  }
`;

const SLink = styled(Link)`
  transition: 0.2s ease-in-out;
  font-size: 0.6rem;
  font-weight: bold;
  line-height: 12px;
  padding: 1rem 0;

  :hover {
    color: #06bd9e;
  }
`;

const NavbarMobile = () => {
  const [PageYOffset, setPageYOffset] = useState(0);
  const [Fixed, setFixed] = useState(false);
  const [MenuOpen, setMenuOpen] = useState(false);

  const scrollHandler = useCallback(() => {
    const { pageYOffset } = window;
    setFixed(PageYOffset > 40);
    setPageYOffset(pageYOffset);
  }, [PageYOffset]);

  const MenuOpenHandler = () => {
    setMenuOpen(!MenuOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);

    return () => window.removeEventListener('scroll', scrollHandler);
  }, [scrollHandler]);

  return (
    <Container>
      {/* 메뉴 버튼 눌렀을시 활성화됨, 모바일 사이드메뉴 */}
      {MenuOpen && (
        <MobileSideMenu
          menuopen={MenuOpen.toString()}
          MenuOpenHandler={MenuOpenHandler}
        />
      )}

      <TopMenuWrap className={Fixed && 'Fixed'}>
        <LogoWrap>
          {/* 메뉴 버튼 */}
          <AiOutlineMenu className="icons" onClick={MenuOpenHandler} />

          <Link to="/">
            <Logo>V E L L A</Logo>
          </Link>
        </LogoWrap>

        <Utility>
          <Link to="#">
            <div className="icons-wrap">
              <GoSearch className="icons search-icon" />
            </div>
          </Link>
          <Link to="#">
            <div className="icons-wrap basket-icon">
              <RiShoppingBagLine className="icons" />{' '}
              <span className="basket-length">0</span>
              {/* 나중에 length로 수량을 받아올 예정 */}
            </div>
          </Link>
        </Utility>
      </TopMenuWrap>

      <GlobalNav className={Fixed && 'Fixed'}>
        <ul>
          <li>
            <SLink to="#">SHOP</SLink>
          </li>
          <li>
            <SLink to="#">UNISEX & BRAND</SLink>
          </li>
          <li>
            <SLink to="#">SALE</SLink>
          </li>

          <li>
            <SLink to="#">COMMUNICATE</SLink>
          </li>
        </ul>
      </GlobalNav>
    </Container>
  );
};

export default NavbarMobile;
