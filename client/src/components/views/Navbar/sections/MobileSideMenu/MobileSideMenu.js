import 'antd/dist/antd.css';
import React from 'react';
import styled from 'styled-components';
import { Menu } from 'antd';

import { CloseOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  ${(props) => (props.menuopen ? 'left: 0' : 'left: :-100%')};
  /* left: 0; // 0이면 메뉴가 활성화됨
  /* left: -100%; */ // 이렇게하면 비활성화 */
  z-index: 1000;
  transition: all 0.3s ease;
`;

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: #fff;
`;

const Top = styled.div`
  ${(props) => (props.menuopen ? 'position:fixed' : 'position:relative')};
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 3.2rem;
  background: #fff;
  padding: 1rem;
  font-size: 1.125rem;
  text-align: center;
  z-index: 3;

  span {
    /* letter-spacing: -1.5px; */
    font-family: 'Dancing Script', cursive;
    font-weight: bold;
  }

  .close-icon {
    width: 1.5rem;
    height: 1.5rem;
    font-size: 1.3rem;
    color: #c8c8c8;
  }
`;

const MenuStyle = styled(Menu)`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  padding-top: 2.5rem;
  margin: 0;
  color: black;
  font-weight: bold;

  i {
    right: 28px;
    color: #c8c8c8;
  }
`;

const SubMenuWrap = styled.div`
  background: #f8f8f8;
  padding: 0.6rem 1.7rem;
  overflow: hidden;
`;

const SubMenuList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const SubMenuItem = styled.li`
  padding: 0.2rem 0;
  width: 50%;
`;

const SLink = styled(Link)`
  line-height: 1rem;
  height: 1rem;
  color: #777;
  letter-spacing: -0.28px;
  font-weight: 400;
`;

const MobileSideMenu = ({ menuopen, MenuOpenHandler }) => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <Link to="/" onClick={MenuOpenHandler}>
            <span>VELLA</span>
          </Link>

          {/* 모바일 메뉴 닫기 버튼 */}
          <CloseOutlined className="close-icon" onClick={MenuOpenHandler} />
        </Top>

        <MenuStyle defaultSelectedKeys={['1']} mode="inline">
          <SubMenu key="sub1" title="SHOP">
            <SubMenuWrap>
              <SubMenuList>
                <SubMenuItem>
                  <SLink to="#">TOP</SLink>
                </SubMenuItem>
                <SubMenuItem>
                  <SLink to="#">SLEEVE</SLink>
                </SubMenuItem>
                <SubMenuItem>
                  <SLink to="#">ONPEIECE</SLink>
                </SubMenuItem>
                <SubMenuItem>
                  <SLink to="#">OUTER</SLink>
                </SubMenuItem>
                <SubMenuItem>
                  <SLink to="#">BOTTOM</SLink>
                </SubMenuItem>
                <SubMenuItem>
                  <SLink to="#">SET</SLink>
                </SubMenuItem>
                <SubMenuItem>
                  <SLink to="#">ACCESSORY</SLink>
                </SubMenuItem>
                <SubMenuItem>
                  <SLink to="#">CAP&HAT</SLink>
                </SubMenuItem>
                <SubMenuItem>
                  <SLink to="#">BAG</SLink>
                </SubMenuItem>
                <SubMenuItem>
                  <SLink to="#">ETC</SLink>
                </SubMenuItem>
                <SubMenuItem>
                  <SLink to="#">BRAND</SLink>
                </SubMenuItem>
              </SubMenuList>
            </SubMenuWrap>
          </SubMenu>

          <SubMenu key="sub2" title="UNISEX&BRAND">
            <SubMenuWrap>
              <SubMenuList>
                <SubMenuItem>
                  <SLink to="#">TOP</SLink>
                </SubMenuItem>
                <SubMenuItem>
                  <SLink to="#">ONPEIECE</SLink>
                </SubMenuItem>
                <SubMenuItem>
                  <SLink to="#">OUTER</SLink>
                </SubMenuItem>
                <SubMenuItem>
                  <SLink to="#">BOTTOM</SLink>
                </SubMenuItem>
                <SubMenuItem>
                  <SLink to="#">SET</SLink>
                </SubMenuItem>
              </SubMenuList>
            </SubMenuWrap>
          </SubMenu>

          <SubMenu key="sub3" title="BIG SALE">
            <SubMenuWrap>
              <SubMenuList>
                <SubMenuItem>
                  <SLink to="#">TOP</SLink>
                </SubMenuItem>
                <SubMenuItem>
                  <SLink to="#">ONPEIECE</SLink>
                </SubMenuItem>
                <SubMenuItem>
                  <SLink to="#">OUTER</SLink>
                </SubMenuItem>
                <SubMenuItem>
                  <SLink to="#">BOTTOM</SLink>
                </SubMenuItem>
                <SubMenuItem>
                  <SLink to="#">SET</SLink>
                </SubMenuItem>
              </SubMenuList>
            </SubMenuWrap>
          </SubMenu>

          <SubMenu key="sub4" title="COMMUNICATE">
            <SubMenuWrap>
              <SubMenuList>
                <SubMenuItem>
                  <SLink to="#">Q & A</SLink>
                </SubMenuItem>
                <SubMenuItem>
                  <SLink to="#">리뷰</SLink>
                </SubMenuItem>
              </SubMenuList>
            </SubMenuWrap>
          </SubMenu>
        </MenuStyle>
      </Wrapper>
    </Container>
  );
};

export default MobileSideMenu;
