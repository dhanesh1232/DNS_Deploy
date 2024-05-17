import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterPage = styled.div`
  width: 100%;
  background: transparent;
  border-top: 1px solid gray;
`;
export const FooterCon = styled.div`
  width: 100%;
  display: flex;
  padding: 15px;
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
