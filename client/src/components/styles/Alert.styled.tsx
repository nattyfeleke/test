import styled from 'styled-components';

const StyledAlert = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
`;

export const SuccessAlert = styled.div`
  padding: 20px;
  margin-bottom: 20px;
  background-color: #2bae66ff;
  color: white;
  font-size: 2rem;
  width: 100%;
  border-radius: 8px;

  div {
    display: flex;
    justify-content: space-between;
  }
`;

export const ErrorAlert = styled.div`
  padding: 20px;
  margin-bottom: 20px;
  background-color: red;
  color: white;
  font-size: 2rem;
  width: 100%;
  border-radius: 8px;

  div {
    display: flex;
    justify-content: space-between;
  }
`;

export default StyledAlert;
