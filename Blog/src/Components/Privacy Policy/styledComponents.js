import styled from "styled-components";
import { Link } from "react-router-dom";
export const PrivacyPage = styled.div`
  width: 100%;
  background: transparent !important;
  height: 88vh;
  overflow-y: auto;
  scroll-behavior: smooth;
  transition: 0.3s all ease-in-out;
  &::-webkit-scrollbar {
    display: none;
  }
  display: flex;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 500px) {
    gap: 20px;
  }
  font-family: "Roboto";
`;
export const PrivacyHead = styled.h1`
  @media screen and (min-width: 600px) and (max-width: 768px) {
    font-size: 24px;
  }
  font-size: 28px;
  color: ${(props) => (JSON.parse(props.headcolor) ? "#fff" : "#262626")};
  @media screen and (max-width: 600px) {
    font-size: 20px;
  }
  transition: all 0.3s ease-in-out;
`;
export const PrivacyBody = styled.div`
  width: 60%;
  @media screen and (max-width: 768px) {
    width: 92%;
  }
  @media screen and (min-width: 768px) and (max-width: 1000px) {
    width: 75%;
  }
  @media screen and (min-width: 1150px) {
    width: 75%;
  }
`;
export const MiniHead = styled.h2`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.4px;
  margin-top: 10px;
  color: ${(props) => (JSON.parse(props.minicolor) ? "#fff" : "#262626")};
`;
export const FirstHead = styled.h3`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.4px;
  margin-top: 10px;
  color: ${(props) => (JSON.parse(props.firstheadcolor) ? "#fff" : "#262626")};
`;
export const DescriptionCon = styled.div`
  width: 100%;
  margin-top: 15px;
`;
export const DescUnorderList = styled.ul`
  list-style: disc;
  margin-left: 25px;
`;
export const DescList = styled.li`
  margin-top: 10px;
`;
export const SecondHead = styled.strong`
  font-size: 16px;
  @media screen and (max-width: 650px) {
    font-size: 14px;
  }
  color: ${(props) => (JSON.parse(props.secondheadcolor) ? "#fff" : "#262626")};
`;
export const DateLine = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 15px;
`;
export const FirstStrong = styled.h4`
  font-size: 16px;
  color: ${(props) =>
    JSON.parse(props.firststrongcolor) ? "#fbfbfb" : "#000"};
  @media screen and (max-width: 650px) {
    font-size: 14px;
  }
  letter-spacing: 0.4px;
`;
export const SecondStrong = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${(props) =>
    JSON.parse(props.secondstrongcolor) ? "#fff" : "#262626"};
  @media screen and (max-width: 650px) {
    font-size: 14px;
  }
  margin-top: ${(props) => props.mrg};
`;
export const NavLinkPrivacy = styled(Link)`
  text-decoration: underline;
  color: ${(props) => (JSON.parse(props.secondstrongcolor) ? "#fff" : "#000")};
  &:hover {
    color: blue;
  }
`;
