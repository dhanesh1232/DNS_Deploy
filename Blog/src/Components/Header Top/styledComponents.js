// styledComponents.jsx
import styled from "styled-components";

export const HeaderPageView = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  height: 2.3rem;
  transition: all 0.3s ease-in-out;
  background: ${(props) =>
    JSON.parse(props.headercolor) ? "#363131" : "#f3f3f3"};
`;

export const SliderView = styled.div`
  height: 2.4rem;
  text-align: center;
  transition: all 0.3s ease-in-out;
  padding: 0.5rem;
`;
export const SliderText = styled.p`
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease-in-out;
  color: ${(props) => (JSON.parse(props.textcolor) ? "#fff" : "#000")};
`;
