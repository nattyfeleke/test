import styled from 'styled-components';

const StyledAppWrapper = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export default StyledAppWrapper;
