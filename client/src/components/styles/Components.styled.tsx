import styled from 'styled-components';

type SvgProps = {
  fillColor: string;
  strokeColor: string;
  background: string;
};

type ButtonProps = {
  variant?: string;
};

export const Container = styled.div`
  margin: 0 40px;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  width: 100%;
`;

export const Input = styled.input`
  padding: 1rem;
  color: #294868;
  background: #feffff;
  border-radius: 4px;

  border: 1px solid #e6eaec;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  width: 75%;
`;

export const ButtonInput = styled.input.attrs({
  type: 'submit',
})`
  padding: 1rem 3.2rem;
  background-color: #0071ff;
  color: white;
  width: fit-content;
  display: table;
  border-radius: 4px;
  font-weight: bold;
  border: none;
  font-size: 1.6rem;
  margin-top: 40px;
  cursor: pointer;
`;

export const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 10px;
`;
export const RadioButtonLabel = styled.label``;
export const RadioButtonInput = styled.input`
  padding: 1rem;
  color: #0071ff;
  background: #feffff;
  border: 1px solid #e6eaec;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
`;

export const Options = styled.div``;

export const FormGroup = styled.div`
  margin: 20px 0;
`;

export const IconButton = styled.button`
  cursor: pointer;
  border: none;
`;

export const SVG = styled.svg<SvgProps>`
  width: 2em;
  height: 2em;
  background: ${(props) => props.background};
  font-size: 1.6rem;

  path,
  polygon,
  rect {
    fill: ${(props) => props.fillColor};
  }
  circle {
    stroke: ${(props) => props.strokeColor};
    stroke-width: 1;
  }
`;

export const Button = styled.button<ButtonProps>`
  padding: 1rem 3.2rem;
  background-color: ${(props) =>
    props.variant === 'filled'
      ? '#0071ff'
      : props.variant === 'none'
      ? 'white'
      : 'white'};
  color: ${(props) =>
    props.variant === 'filled'
      ? 'white'
      : props.variant === 'none'
      ? '#0071ff'
      : '#0071ff'};
  width: fit-content;
  display: table;
  border-radius: 4px;
  font-weight: bold;
  border: none;
  font-size: 1.6rem;
  margin-top: 40px;
  cursor: pointer;

  a {
    text-decoration: none;
    color: #0071ff;
  }
`;

export default Container;
