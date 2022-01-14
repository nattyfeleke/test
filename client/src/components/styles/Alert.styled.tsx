import styled from 'styled-components';

const StyledAlert = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
`;

export const SuccessAlert = styled.div`
  padding: 16px 20px;
  margin-bottom: 20px;
  background-color: #2bae66ff;
  color: white;
  font-size: 1.5rem;
  width: 100%;
  border-radius: 8px;

  div {
    display: flex;
    justify-content: space-between;

    svg {
      margin-right: 8px;
    }
  }
`;

export const ErrorAlert = styled.div`
  padding: 16px 20px;
  margin-bottom: 20px;
  background-color: red;
  color: white;
  font-size: 1.5rem;
  width: 100%;
  border-radius: 8px;

  div {
    display: flex;
    justify-content: space-between;

    svg {
      margin-right: 8px;
    }
  }
`;

export default StyledAlert;
