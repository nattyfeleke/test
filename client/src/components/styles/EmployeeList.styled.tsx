import styled from 'styled-components';

const StyledEmployeeList = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #fff;
  border-radius: 6px;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);

  margin: 20px 0;
  padding: 20px;

  @media screen and (max-width: 460px) {
    gap: 1rem;
  }

  div {
    width: 25%;
    max-width: 400px;
  }
`;

export default StyledEmployeeList;
