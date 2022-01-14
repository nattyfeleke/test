import styled from 'styled-components';

const StyledHero = styled.div`
  width: 30%;
  height: 100vh;
  background: rgb(0, 113, 255);
  background: linear-gradient(
    150deg,
    rgba(0, 113, 255, 1) 2%,
    rgba(0, 113, 255, 1) 66%,
    rgba(80, 152, 242, 1) 100%
  );
  padding: 40px 0;

  h2 {
    color: white;
    margin: 60px 0;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: fit-content;

    h2 {
      margin: 20px 0;
      font-size: 2.5rem;
    }

    #heroContent {
      display: flex;
      align-items: center;
      gap: 2rem;
      img {
        width: 50%;
        margin-left: 30px;
      }
    }
  }

  @media screen and (max-width: 520px) {
    #heroContent {
      h2 {
        text-align: center;
        width: 100%;
      }
      img {
        display: none;
      }
    }
  }
`;

export default StyledHero;
