import 'antd/dist/antd.css';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Menu } from 'antd';

import { CloseOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  /* left: -100%; */
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
  position: fixed;
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

const SubMenuStyle = styled(SubMenu)`
  padding: 0;
  margin: 0;
`;

const MobileSideMenu = () => {
  const [current, setCurrent] = useState();

  const handleClick = (e) => {
    console.log('click ', e);
    setCurrent({ current: e.key });
  };

  return (
    <Container>
      <Wrapper>
        <Top>
          <span>VELLA</span>
          <CloseOutlined className="close-icon" />
        </Top>

        <MenuStyle
          onClick={handleClick}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
        >
          <SubMenuStyle key="sub2" title="SHOP">
            <SubMenuStyle key="sub3" title="TOP">
              <MenuStyle.Item key="1">TOP</MenuStyle.Item>
              <MenuStyle.Item key="2">SLEEVE</MenuStyle.Item>
            </SubMenuStyle>

            <MenuStyle.Item key="3">ONPEIECE</MenuStyle.Item>
            <MenuStyle.Item key="4">OUTER</MenuStyle.Item>
            <MenuStyle.Item key="5">BOTTOM</MenuStyle.Item>
            <MenuStyle.Item key="6">SET</MenuStyle.Item>

            <SubMenuStyle key="sub4" title="ACC">
              <MenuStyle.Item key="7">ACCESSORY</MenuStyle.Item>
              <MenuStyle.Item key="8">CAP&HAT</MenuStyle.Item>
              <MenuStyle.Item key="9">BAG</MenuStyle.Item>
              <MenuStyle.Item key="10">ETC</MenuStyle.Item>
            </SubMenuStyle>
            <MenuStyle.Item key="11">BRAND</MenuStyle.Item>
          </SubMenuStyle>

          <SubMenu key="sub5" title="UNISEX&BRAND">
            <Menu.Item key="12">TOP</Menu.Item>
            <Menu.Item key="13">ONEPEICE</Menu.Item>
            <Menu.Item key="14">OUTER</Menu.Item>
            <Menu.Item key="15">BOTTOM</Menu.Item>
            <Menu.Item key="16">SET</Menu.Item>
          </SubMenu>

          <SubMenu key="sub6" title="BIG SALE">
            <Menu.Item key="17">TOP</Menu.Item>
            <Menu.Item key="18">ONEPEICE</Menu.Item>
            <Menu.Item key="19">OUTER</Menu.Item>
            <Menu.Item key="20">BOTTOM</Menu.Item>
            <Menu.Item key="21">SET</Menu.Item>
          </SubMenu>

          <SubMenu key="sub7" title="COMMUNICATE">
            <Menu.Item key="22">CS CENTER</Menu.Item>
            <Menu.Item key="23">Q N A</Menu.Item>
            <Menu.Item key="24">REVIEW</Menu.Item>
          </SubMenu>
        </MenuStyle>
      </Wrapper>
    </Container>
  );
};

export default MobileSideMenu;
