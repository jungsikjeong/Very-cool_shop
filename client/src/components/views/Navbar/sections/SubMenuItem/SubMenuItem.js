import React from 'react';
import styled from 'styled-components';
import topImage from '../../../../../assets/images/top01.jpg';
import bottomImage from '../../../../../assets/images/bottom.jpeg';
import onepieceImage from '../../../../../assets/images/onepiece.jpg';
import setImage from '../../../../../assets/images/set.jpeg';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100%; // 사이즈가 너무 크면 조절
  padding: 0.75rem;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  color: black;

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    font-size: 0.9rem;
    margin-right: 1rem;

    :last-child {
      margin: 0;
    }

    .textWrap {
      flex-grow: 1;
      text-align: left;

      .title {
        margin-top: 0.5rem;
      }
      .content {
        margin: 0.35rem 0;
        color: #808080;
        flex-wrap: wrap;
        flex-grow: 1;
      }
    }

    img {
      max-width: 100%;
      height: auto;
      overflow: hidden;
      border-radius: 5px;

      :last-child {
        margin-right: 0;
      }
    }
  }
`;

const SLink = styled(Link)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const items = [
  {
    title: 'H894 카키 그런지 패치 반팔 티셔츠 ',
    content:
      '#여성빈티지 #여자빈티지 #빈티지샵 #빈티지자켓 #빈티지반팔 #그런지반팔 #유니크자켓 #유니크룩 #여자반팔 #여성반팔',
    price: '₩20,000',
    src: topImage,
  },
  {
    title: 'HA9 레드 키치 니트 원피스',
    content: '#나시원피스 #민소매원피스 #키치원피스 #하이틴',
    price: '₩28,000',
    src: onepieceImage,
  },
  {
    title: 'J936 에드윈 edwin503 데님 팬츠 (29in)',
    content: '#에드윈 #데님팬츠 #청바지 #에드윈청바지 #브랜드청바지',
    price: '₩25,000',
    src: bottomImage,
  },
  {
    title: 'JA90 블랙 셋업(24in)',
    content: 'JA90 블랙 셋업(24in)',
    price: '₩38,000',
    src: setImage,
  },
];

const SubMenuItem = () => {
  return (
    <Container>
      <Wrapper>
        {items.map((item) => (
          <div>
            <SLink to="/">
              <img src={item.src} alt="top" />

              <div className="textWrap">
                <span className="title">
                  {item.title.length > 11
                    ? `${item.title.slice(0, 11)}...`
                    : item.title}
                </span>
                <p className="content">
                  {item.content.length > 11
                    ? `${item.content.slice(0, 15)}...`
                    : item.content}
                </p>
                <p>{item.price}</p>
              </div>
            </SLink>
          </div>
        ))}
      </Wrapper>
    </Container>
  );
};

export default SubMenuItem;
