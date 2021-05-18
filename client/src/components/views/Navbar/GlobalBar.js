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

const GlobalBarWrapper = styled.header`
  width: 100%;
  color: black;
`;

const GlobalSearch = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  padding: 15px 1.5rem;
  h1 {
    /* line-height: 20px; */
    font-weight: bold;
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid black;
  height: 30px;

  input {
    padding: 0;
    border: none;
    background: none;
    outline-style: none;

    ::placeholder {
      color: black;
    }
  }

  button {
    background: none;
    border: none;
  }
`;

const Utility = styled.div`
  display: flex;
  &.Fixed {
    margin-left: auto;
  }

  div {
    display: flex;
    margin: 0px 10px;
    align-items: center;
    flex-direction: column;

    span {
      font-size: 10px;
      margin-top: 2px;
    }
  }
`;

const GlobalNav = styled.nav`
  position: relative;
  background: black;
  width: 100%;
  height: 45px;
  color: #fff;

  &.Fixed {
    background: black;
    padding: 15px 1.5rem;
    position: fixed;
    top: 0;
  }

  h1 {
    /* line-height: 20px; */
    font-weight: bold;
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    li {
      padding: 0 25px;
    }
  }
`;

const SLink = styled(Link)`
  transition: 0.2s ease-in-out;
  font-size: 10px;
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
    // console.log(Fixed);
    setPageYOffset(pageYOffset);
  }, [PageYOffset]);

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);

    return () => window.removeEventListener('scroll', scrollHandler);
  }, [scrollHandler]);

  return (
    <GlobalBarWrapper>
      <GlobalSearch>
        <Link to="/">
          <h1>
            V I N T A G E <br />V E L L A
          </h1>
        </Link>

        <SearchBar>
          <input type="text" placeholder="Search" />

          <button>
            <GoSearch />
          </button>
        </SearchBar>

        <Utility>
          <Link to="#">
            <div>
              <AiOutlineUserAdd size={20} />
              <span>JOIN</span>
            </div>
          </Link>
          <Link to="#">
            <div>
              <AiOutlineLogin size={20} />
              <span>LOGIN</span>
            </div>
          </Link>
          <Link to="#">
            <div>
              <RiShoppingBagLine size={20} /> <span>0</span>
              {/* 나중에 length */}
            </div>
          </Link>
        </Utility>
      </GlobalSearch>

      <GlobalNav className={Fixed && 'Fixed'}>
        <ul>
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
            <SubMenuSHOP HoverState={HoverState} />
          </li>
          <li
            onMouseEnter={() => hoverHandler('unisex')}
            onMouseLeave={() => hoverHandler('')}
          >
            <SLink to="#">UNISEX & BRAND</SLink>
            <SubMenuUNISEX HoverState={HoverState} />
          </li>
          <li
            onMouseEnter={() => hoverHandler('sale')}
            onMouseLeave={() => hoverHandler('')}
          >
            <SLink to="#">SALE</SLink>
            <SubMenuSALE HoverState={HoverState} />
          </li>

          <li
            onMouseEnter={() => hoverHandler('communicate')}
            onMouseLeave={() => hoverHandler('')}
          >
            <SLink to="#">COMMUNICATE</SLink>
            <SubMenuCOMMUNICATE HoverState={HoverState} />
          </li>

          {Fixed && (
            <Utility className={Fixed && 'Fixed'}>
              <Link to="#">
                <div>
                  <GoSearch size={15} />
                  <span>SEARCH</span>
                </div>
              </Link>
              <Link to="#">
                <div>
                  <BsFillPersonFill size={15} />
                  <span>MY</span>
                </div>
              </Link>
              <Link to="#">
                <div>
                  <RiShoppingBagLine size={15} /> <span>0</span>
                  {/* 나중에 length */}
                </div>
              </Link>
            </Utility>
          )}
        </ul>
      </GlobalNav>
    </GlobalBarWrapper>
  );
};

export default GlobalBar;
