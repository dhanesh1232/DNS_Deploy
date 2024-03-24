import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled, { css, keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    transform: translateX(0px);
  }
  to {
    transform: translateX(350px);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(350px);
  }
  to {
    transform: translateX(0px);
  }
`;

const rotateRight = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(45deg);
  }
`;

const rotateLeft = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-45deg);
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  background: transparent;
  position: relative;
`;

export const LogoImage = styled.img`
  padding-left: 15px;
  width: 125px;
  height: 75px;
  transition: all 0.3s ease;
  @media screen and (max-width: 768px) {
    width: 105px;
    height: 60px;
  }
`;

export const NavContainer = styled.div`
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
export const NavPage = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  transition: all 0.3s ease;
  @media screen and (max-width: 768px) {
    top: 0;
    width: 150px;
    right: 0;
    position: absolute;
    opacity: ${(props) => (JSON.parse(props.isshow) ? "100" : "0")};
    height: ${(props) => (JSON.parse(props.isshow) ? "500px" : "0")};
    transition: opacity 0.5s ease, height 0.5s ease;
    overflow: hidden;
    /* Other styles */
    box-shadow: -5px -5px 15px rgba(255, 255, 255, 0.1),
      5px 5px 15px rgba(0, 0, 0, 0.35);
    &::after {
      content: "";
      background: ${(props) =>
        JSON.parse(props.isbgtheme) ? "gray" : "skyblue"};
      height: 100%;
      width: 100%;
      position: absolute;
      transition: transform 0.3s linear;
      animation: ${(props) =>
        JSON.parse(props.isshow)
          ? css`
              ${slideIn} 1.5s forwards linear 0.5s
            `
          : css`
              ${slideOut} 0.1s forwards linear 0.5s
            `}
  }
`;

export const NavList = styled.ul`
  width: 84%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  transition: all 0.3s ease;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 85%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
`;
export const NavLink = styled(Link)`
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => (JSON.parse(props.linkcolor) ? "#fff" : "#333")};
  text-decoration: none;
  position: relative;
  font-family: "Roboto";
  &::after {
    content: "";
    position: absolute;
    background: blue;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    transform: scaleX(0);
    transition: 0.3s ease all;
    transform-origin: center;
    -webkit-transition: 0.3s ease all;
    -moz-transition: 0.3s ease all;
    -ms-transition: 0.3s ease all;
    -o-transition: 0.3s ease all;
  }
  &:hover::after {
    transform: scaleX(1);
  }
`;

export const SerachPageControl = styled.div`
  width: 15%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  order: 1;
  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 15px;
    justify-content: space-between;
    position: absolute;
    top: 0px;
    left: 0px;
  }
`;
export const CloseButton = styled.button`
  width: 26px;
  height: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background: transparent;
  cursor: pointer;
  border: none;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Line = styled.div`
  width: 25px;
  height: 2.5px;
  background: ${(props) => (JSON.parse(props.menuline) ? "#fff" : "#000")};
  margin: 5px;
  transition: 0.4s ease;
  border-radius: 50px;
  position: absolute;
  &:nth-child(1) {
    transform: rotate(0deg);
    animation: ${(props) =>
        JSON.parse(props.isshow)
          ? css`
              ${rotateLeft}
            `
          : ""}
      1.3s ease forwards 0.3s;
  }
  &:nth-child(2) {
    transform: rotate(0deg);
    animation: ${(props) =>
        JSON.parse(props.isshow)
          ? css`
              ${rotateRight}
            `
          : ""}
      1.3s ease forwards 0.3s;
  }
`;
export const MenuButton = styled.div`
  width: 5rem;
  height: 2.5rem;
  display: none;
  gap: 5px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
  }
`;
export const MenuLine = styled.div`
  height: 2.5px;
  width: 25px;
  background: ${(props) => (JSON.parse(props.menuline) ? "#fff" : "#000")};
  margin: 5px;
  transition: all 0.4s ease-in-out;
  -webkit-transition: 0.4s;
  -moz-transition: 0.4s;
  -ms-transition: 0.4s;
  -o-transition: 0.4s;
  padding: 0;
  margin: 0;
  border-radius: 50px;
  -webkit-border-radius: 50px;
  -moz-border-radius: 50px;
  -ms-border-radius: 50px;
  -o-border-radius: 50px;
`;
export const Label = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 30px;
  overflow: hidden;
`;
export const InputCheckbox = styled.input`
  display: none;
`;
export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #000;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 23px;
    width: 23px;
    left: 2px;
    bottom: 4px;
    background: ${(props) => (JSON.parse(props.isbg) ? "#000" : "#fff")};
    transition: 0.4s;
    border-radius: 50%;
  }

  ${InputCheckbox}:checked + & {
    background: #fff;
  }

  ${InputCheckbox}:checked + &::before {
    transform: translateX(22px);
  }
`;
export const ProfileContainer = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: ${(props) => (JSON.parse(props.ispro) ? "#fff" : "#000")};
  font-size: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
