import styled from "styled-components";
import { Link } from "react-router-dom";

export const AboutPage = styled.div`
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
    gap: 50px;
  }
  font-family: "Roboto";
`;
export const AboutPageHeading = styled.h1`
  font-size: 28px;
  transition: all 0.3s ease-in-out;
  color: ${(props) => (JSON.parse(props.headcolor) ? "#fff" : "#262626")};
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;
export const AboutContentBody = styled.div`
  width: 60%;
  transition: all 0.3s ease-in-out;
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
export const FirstStrong = styled.h2`
  font-weight: 500;
  font-size: 19px;
  margin-top: ${(props) => props.mrg};
  @media screen and (max-width: 500px) {
    font-size: 16px;
    margin-top: 10px;
  }
  color: ${(props) => (JSON.parse(props.firstcolor) ? "#fff" : "#000")};
`;
export const SecondStrong = styled.p`
  margin-top: ${(props) => props.mrg};
  font-family: "Roboto";
  font-size: 17px;
  @media screen and (max-width: 500px) {
    font-size: 14px;
    margin-top: 10px;
  }
  color: ${(props) => (JSON.parse(props.secondcolor) ? "#fff" : "#000")};
`;
export const ThirdStrong = styled.p`
  font-size: 15px;
  margin-top: 18px;
  @media screen and (max-width: 500px) {
    font-size: 13px;
    margin-top: 10px;
    letter-spacing: 0.8px;
  }
  color: ${(props) => (JSON.parse(props.thirdcolor) ? "#fff" : "#000")};
`;
export const InnerStrong = styled.strong`
  font-size: 16px;
  font-weight: 500;
`;
export const BulletPoints = styled.ul`
  width: 95%;
  list-style: disc;
  margin-left: 16px;
`;
export const BulletPointsList = styled.li``;
export const NavAbout = styled(Link)`
  color: ${(props) => (JSON.parse(props.linkcolor) ? "#fff" : "#000")};
  padding-left: 10px;
  font-size: 16px;
  &:hover {
    color: blue;
  }
  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
`;
