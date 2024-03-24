import styled from "styled-components";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const ProfilePage = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ProfileView = styled.div`
  transition: all 0.3s ease-in-out;
  box-shadow: ${(props) =>
    props.isshadow
      ? "0px 5px 15px rgba(0, 0, 0, 0.2)"
      : "0px 5px 15px rgba(255, 255, 255, 0.3)"};

  height: 85%;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 35%;
  min-width: 300px;
  flex: 1 0;
  @media (min-width: 576px) {
    min-width: 400px;
  }
  border-radius: 12px;
`;
export const ProfileNavTab = styled.ul`
  border: 2px solid gray;
  width: 80%;
  height: 6.5%;
  display: flex;
  align-items: center;
  background: transparent;
  justify-content: space-between;
  list-style: none;
  border-radius: 12px;
`;
export const ProfileLink = styled(Link)`
  height: 100%;
  width: 50%;
  display: grid;
  place-items: center;
  font-size: 18px;
  text-decoration: none;
  font-weight: 600;
  border-radius: 10px;
  color: ${(props) =>
    JSON.parse(props.isbg)
      ? "#fff"
      : JSON.parse(props.linkcolor)
      ? "#fff"
      : "#333"};
  transition: all 0.3s ease-in-out;
  background: ${(props) => (JSON.parse(props.isbg) ? "blue" : "")};
`;
export const PageInputs = styled.div`
  width: 80%;
  height: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: all 0.3s ease-in-out;
`;
export const FormHeading = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${(props) => (JSON.parse(props.formhead) ? "#fff" : "#333")};
`;
export const PageForm = styled.form`
  width: 100%;
  height: 90%;
`;
export const FormGroup = styled.div`
  width: 100%;
  height: 2rem;
  position: relative;
  margin: 15px 0px;
`;
export const FormLabel = styled.label`
  position: absolute;
  top: ${({ isfocused }) => (JSON.parse(isfocused) ? "-10px" : "3px")};
  left: 5px;
  font-size: ${({ isfocused }) => (JSON.parse(isfocused) ? "12px" : "16px")};
  color: ${({ isfocused }) => (JSON.parse(isfocused) ? "#333" : "#acacac")};
  padding: 0 10px;
  transition: ease-in-out all 0.15s;
  background: ${({ islabel }) => (JSON.parse(islabel) ? "#333" : "#fff")};
`;
export const FormInput = styled.input`
  height: 2rem;
  width: 100%;
  border: 1px solid gray;
  transition: all ease-in-out 0.15s;
  background-color: #fff;
  border-radius: 5px;
  color: #262626;
  padding-left: 10px;
  &:focus {
    border-color: #eee;
  }
  &::placeholder {
    color: transparent;
  }
`;
export const FormButton = styled.button``;
export const FormNav = styled(Link)``;
export const FormNavPara = styled.p``;
export const FormNavLink = styled.span``;
export const FormError = styled.p``;
