import styled from "styled-components";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const ProfilePage = styled.div`
  width: 100%;
  z-index: 1;
  display: flex;
  align-items: flex-start;
  height: 100%;
  justify-content: center;
  padding-top: 20px;
  overflow: auto;
  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
`;
export const ProfileView = styled.div`
  margin: 25px 10px;
  padding: 15px 5px;
  transition: all 0.3s ease-in-out;
  box-shadow: ${(props) =>
    props.isshadow
      ? "0px 5px 15px rgba(0, 0, 0, 0.2)"
      : "0px 5px 15px rgba(255, 255, 255, 0.35)"};
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 30%;
  min-width: 300px;
  flex: 1 0;
  @media (min-width: 576px) {
    min-width: 400px;
  }
  border-radius: 12px;
  border-top: 8px solid blue;
`;
export const ProfileNavTab = styled.ul`
  border: 2px solid gray;
  width: 80%;
  height: 2rem;
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
  background: ${(props) => (JSON.parse(props.isbg) ? "#1702f9ea" : "")};
`;
export const PageInputs = styled.div`
  width: 80%;
  height: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
  color: ${(props) =>
    JSON.parse(props.islabel)
      ? JSON.parse(props.isfocused)
        ? "#fff"
        : "#acacac"
      : JSON.parse(props.isfocused)
      ? "#333"
      : "#acacac"};
  padding: 0 10px;
  transition: ease-in-out all 0.15s;
  background: ${({ islabel }) => (JSON.parse(islabel) ? "#262626" : "#fff")};
`;
export const FormInput = styled.input`
  height: 2rem;
  width: 100%;
  border: 1px solid gray;
  transition: all ease-in-out 0.15s;
  background: transparent;
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
export const ShowContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 2rem;
  margin-bottom: 5px;
`;
export const ShowGroup = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 50%;
`
export const UserContainer = styled.div`
  width:50%;
  display: flex;
  align-items: center;
  gap: 5px;`
export const UserCodeInput = styled.input`
  width: 7rem;
  height: 1.8rem;
  border: 1px solid gray;
  font-size: 12px;
`
export const ShowMessage = styled.label`
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 2px;
  color: ${(props) => (JSON.parse(props.islabel) ? "#fff" : "gray")};
`;
export const ShowPassword = styled.input`
  height: 1rem;
  width: 1rem;
  cursor: pointer;
`;
export const FormButton = styled.button`
  width: 100%;
  height: 2rem;
  background: #0494ef;
  font-size: 16px;
  color: #fff;
  border: none;
  outline: none;
  border-radius: 8px;
  cursor: pointer;
  &:active {
    background: green;
  }
`;
export const FormNav = styled(Link)`
  width: 100%;
  height: 1rem;
  justify-content: center;
  font-size: 14px;
  display: flex;
  align-items: center;
  text-align: center;
  color: gray;
  text-decoration: none;
  font-family: "Roboto";
  gap: 5px;
  margin-top: 15px;
`;
export const FormNavLink = styled.span`
  color: ${(props) => (JSON.parse(props.ispara) ? "#fff" : "#000")};
  font-size: 14px;
  &:hover {
    color: #0494ef;
  }
`;
export const FormError = styled.p`
  font-size: 12px;
  color: red;
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: bold;
`;
export const VerifyContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: #b1b1b17b;

  display: flex;
  align-items: center;
  justify-content: center;
`
export const VerifyView = styled.div`
  width: 350px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 12px;
`
export const VerifyForm = styled.form`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  `
export const VerifyTitle = styled.h2`
  font-size:24px;
  text-align:center;
`
export const VerifyCon = styled.div`
  width:100%;
  height:75%;
  display:flex;
  flex-direction:column;
  align-items:center;
  margin-top:25px;
  gap: 15px;
`
export const VerifyInput = styled.input`
  width: 14rem;
  height: 2.5rem;
  border: 1px solid gray;
  align-self: center; 
  transition: all ease-in-out 0.15s;
  border:2px solid #000;
  border-radius:8px;
  padding-left:8px;
  font-size:16px;
  outline:none;
`
export const VerifyButton = styled.button`
  width: 5rem;
  height: 2.5rem;
  background: #0494ef;
  font-size: 16px;
  border:none;
  outline:none;
  box-shadow: 5px 5px 15px;
  border-radius:4px;
  cursor: pointer;
  font-weight:600;
  color:#fff;
  &:hover{
    background: blue;
    border: none;
    border-radius:20px;
  }
  &:active{
    background: lime;
    border: none;
    border-radius:20px;
  }
`
export const VerifyError = styled.p`
  font-size: 12px;
  color: red;
  margin-top: 10px;
  margin-bottom: 10px;
`
