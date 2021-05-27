import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

import styleStory0 from '../../../../../assets/images/shop/style-story00.jpeg';
import styleStory1 from '../../../../../assets/images/shop/style-story01.jpg';

const Container = styled.section`
  display: flex;
  overflow: hidden;
  padding: 0 1.25rem;
  margin-bottom: 3rem;

  @media (min-width: 800px) {
    width: 100%;
    padding: 0rem;
    justify-content: center;
  }

  .contents-wrap {
    display: flex;
    flex-direction: column;
    width: 50%;
    /* margin-right: 0.4rem; */
    @media (min-width: 800px) {
      width: 25%;
      padding-left: 1rem;
    }

    .img-wrap {
      margin-bottom: 1rem;
      img {
        width: 100%;
        max-width: 100%;
      }
    }

    .text-wrap {
      text-align: center;
      padding-right: 0.625rem;
      h3 {
        font-weight: 600;
        font-size: 0.8rem;
        color: #000;
        margin-bottom: 0.375rem;
      }

      p {
        font-size: 0.715rem;
        line-height: 1rem;
        letter-spacing: -0.26px;
        color: #777;
      }
    }
  }
`;

// 세일중인 아이템 혹은 다양한 소식
const StyleStorySection = () => {
  const isMobile = useMediaQuery({
    query: '(max-width:767px)',
  });
  return (
    <div>
      {isMobile ? (
        // 모바일
        <Container>
          <div className="contents-wrap">
            <div className="img-wrap">
              <img src={styleStory0} alt="" />
            </div>

            <div className="text-wrap">
              <h3>J880 아이보리 네트 여리 니트탑</h3>
              <p>시원한 브라렛 세일중!</p>
            </div>
          </div>

          <div className="contents-wrap" style={{ marginLeft: '1rem' }}>
            <div className="img-wrap">
              <img src={styleStory1} alt="" />
            </div>

            <div className="text-wrap">
              <h3>H918 모리스타일 백팩 </h3>
              <p>모리걸 백팩</p>
            </div>
          </div>
        </Container>
      ) : (
        // PC
        <Container>
          <div className="contents-wrap">
            <Link to="#">
              <div className="img-wrap">
                <img src={styleStory0} alt="" />
              </div>

              <div className="text-wrap">
                <h3>J880 아이보리 네트 여리 니트탑</h3>
                <p>시원하고 세련된 네트 여리 티트탑 세일중!</p>
              </div>
            </Link>
          </div>

          <div className="contents-wrap">
            <Link to="#">
              <div className="img-wrap">
                <img src={styleStory1} alt="" />
              </div>

              <div className="text-wrap">
                <h3>H918 모리스타일 백팩 </h3>
                <p>모리걸 백팩</p>
              </div>
            </Link>
          </div>

          <div className="contents-wrap">
            <Link to="#">
              <div className="img-wrap">
                <img src={styleStory1} alt="" />
              </div>

              <div className="text-wrap">
                <h3>H918 모리스타일 백팩 </h3>
                <p>모리걸 백팩</p>
              </div>
            </Link>
          </div>
        </Container>
      )}
    </div>
  );
};

export default StyleStorySection;
