import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterPage = styled.div`
  width: 100%;
  margin-top: 15px;
  background: ${(props) =>
    JSON.parse(props.footerbg) ? "#262121" : "#f3f3f3"};
  font-family: "Roboto";
`;
export const FooterCon = styled.div`
  width: 100%;
  display: flex;
  padding: 15px;
  gap: 10px;
  color: ${(props) => (JSON.parse(props.copycolor) ? "#fff" : "#262626")};
`;
export const PoliciesCon = styled.div`
  width: 100%;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const PoliciesHeading = styled.h1`
  color: ${(props) => (JSON.parse(props.headcolor) ? "#fff" : "#262626")};
  font-size: 20px;
  margin-bottom: 10px;
`;
export const PoliciesList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  alignitems: center;
  justify-content: center;
  gap: 10px;
`;
export const NavLinkFooter = styled(Link)`
  color: ${(props) => (JSON.parse(props.linkcolor) ? "#fff" : "#000")};
  padding-left: 10px;
  font-size: 16px;
  &:hover {
    color: blue;
  }
`;
export const SliderTextNav = styled(Link)`
  font-size: 15px;
  font-weight: 500;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  color: ${(props) => (JSON.parse(props.linkcolor) ? "#fff" : "#262626")};
`;
