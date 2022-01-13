import styled from 'styled-components';

const StyledHeader = styled.header`
  @media screen and (max-width: 1032px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    div {
      margin: 0;
    }
  }
`;

export default StyledHeader;
