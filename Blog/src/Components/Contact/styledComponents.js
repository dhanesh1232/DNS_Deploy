import styled from "styled-components";

export const ContactPageHome = styled.div`
  width: 100%;
  background: transparent !important;
  height: 92vh;
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
`;
export const ContactPageHeading = styled.h1`
  transition: 0.3s all ease-in-out;
  text-align: center;
  color: ${(props) => (JSON.parse(props.headcolor) ? "#fff" : "#262626")};
`;

export const ContactInfoPage = styled.div`
  width: 50%;
  max-height: 85%;
  min-height: 85%;
  @media screen and (max-width: 768px) {
    width: 92%;
  }
`;
export const MiniHeading = styled.h3`
  transition: 0.3s all ease-in-out;
  text-decoration: underline;
  font-size: 20px;
  color: ${(props) => (JSON.parse(props.minicolor) ? "#fff" : "#000")};
`;
export const FirstGreet = styled.p`
  color: gray;
  font-size: 16px;
  transition: all 0.3s ease-in-out;
  margin-top: 10px;
`;
export const SecondGreet = styled.p`
  color: ${(props) => (JSON.parse(props.secondcolor) ? "#fff" : "#000")};
  font-size: 18px;
  transition: 0.3s all ease-in-out;
  margin: auto;
  margin-top: 15px;
  padding: auto;
  transition: all 0.3s ease-in-out;
  @media screen and (max-width: 550px) {
    font-size: 16px;
  }
`;
export const NoteStrong = styled.strong`
  font-size: 18px;
  color: ${(props) => (JSON.parse(props.notecolor) ? "lightblue" : "")};
`;
export const ThirdGreet = styled.p`
  color: ${(props) => (JSON.parse(props.thirdcolor) ? "#fff" : "#000")};
  font-size: 18px;
  transition: 0.3s all ease-in-out;
  margin: auto;
  margin-top: 15px;
  padding: auto;
  transition: all 0.3s ease-in-out;
  @media screen and (max-width: 550px) {
    font-size: 16px;
  }
`;
export const ContactInfoData = styled.div`
  display: flex;
  margin-top: 25px;
  flex-direction: column;
  transition: all 0.3s ease-in-out;
`;
export const ContactData = styled.p`
  font-size: 18px;
  transition: all 0.3s ease-in-out;
  margin-top: 5px;
  color: ${(props) => (JSON.parse(props.navcolor) ? "#fff" : "#000")};
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  @media screen and (max-width: 550px) {
    font-size: 16px;
  }
`;
export const DataSpan = styled.a`
  text-decoration: none;
  &:hover {
    color: blue;
  }
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  color: ${(props) => (JSON.parse(props.navcolor) ? "#fff" : "#000")};
`;
export const ContactSocial = styled.div`
  width: 100%;
  margin-top: 25px;
`;
export const SocialHead = styled.h2`
  font-size: 20px;
  transition: all 0.3s ease-in-out;
  color: ${(props) => (JSON.parse(props.socialcolor) ? "#fff" : "#262626")};
`;
export const SocialIcons = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: auto;
  transition: all 0.3s ease-in-out;
  gap: 10px;
`;
export const SocialNav = styled.a`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: 2px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  margin-top: 5px;
  color: ${(props) => props.iconcolor};
`;
export const EndContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 25px;
  @media screen and (max-width: 450px) {
    margin: 0px;
  }
`;
export const InputCheckCon = styled.div`
  width: 7rem;
  gap: 10px;
  display: flex;
  align-items: center;
`;
export const InputCheckLabel = styled.label`
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease-in-out;
  color: ${(props) => (JSON.parse(props.labelcolor) ? "#fff" : "#000")};
  font-weight: 600;
  &:hover {
    color: darkblue;
    text-decoration: underline;
  }
`;
export const InputCheck = styled.input`
  height: 20px;
  width: 20px;
  cursor: pointer;
`;
/*Form Page Started*/
export const ContactFormPage = styled.div`
  width: 50%;
  min-height: 90%;
  max-height: 90%;
  transition: 0.3s all ease-in-out;
  @media screen and (max-width: 768px) {
    width: 92%;
  }
`;
export const ContactFormHeading = styled.h2`
  font-size: 24px;
  color: gray;
  text-align: center;
  @media screen and (max-width: 500px) {
    font-size: 18px;
  }
  transition: all 0.3s ease-in-out;
`;
export const ContactForm = styled.form`
  width: 100%;
`;
export const ContactHeaderBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 2px;
  transition: all 0.3s ease-in-out;
  @media screen and (max-width: 450px) {
    flex-direction: column;
    gap: 10px;
  }
  @media screen and (min-width: 451px) and (max-width: 768px) {
    flex-direction: row;
  }
  @media screen and (min-width: 769px) and (max-width: 1000px) {
    flex-direction: column;
    gap: 10px;
  }
`;
export const ContactHeader = styled.div`
  width: 48%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (min-width: 450px) and (max-width: 1000px) {
    width: 100%;
  }
`;
export const ContactInputBody = styled.input`
  width: 100%;
  height: 3.2rem;
  font-size: 16px;
  background: #8080802b;
  border: 2px solid transparent;
  outline: none;
  &:hover {
    background: #4b4bae46;
    border: 2px solid blue;
    box-shadow:
      0 0 2px blue,
      0 0 2px skyblue;
  }
  padding-left: 10px;
  border-radius: 4px;
  box-shadow: inset 0 0 8px skyblue;
  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    outline: none;
  }
  transition: all 0.3s ease-in-out;
  color: ${(props) => (JSON.parse(props.inputcolor) ? "#fff" : "#000")};
`;
export const ContactInputLabel = styled.label`
  font-size: 16px;
  color: ${(props) => (JSON.parse(props.labelcolor) ? "#fff" : "#000")};
  font-weight: 500;
  transition: all 0.3s ease-in-out;
`;
export const ContactGroup = styled.div`
  width: 100%;
  margin-top: 15px;
`;
export const ContactInputTextarea = styled.textarea`
  width: 100%;
  font-size: 16px;
  background: #8080802b;
  border: 2px solid transparent;
  outline: none;
  &:hover {
    background: #4b4bae46;
    border: 2px solid blue;
    box-shadow:
      0 0 2px blue,
      0 0 2px skyblue;
  }
  padding-left: 10px;
  border-radius: 4px;
  box-shadow: inset 0 0 8px skyblue;
  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    outline: none;
  }
  transition: all 0.3s ease-in-out;
  color: ${(props) => (JSON.parse(props.inputcolor) ? "#fff" : "#000")};
`;
export const FormButton = styled.button`
  height: 3.2rem;
  width: 100%;
  margin-top: 10px;
  background: #0494ef;
  &:hover {
    background: transparent;
    border: 2px solid blue;
    box-shadow:
      0 0 2px blue,
      0 0 2px skyblue;
    color: ${(props) => (JSON.parse(props.buttoncolor) ? "#fff" : "#000")};
  }
  cursor: pointer;
  border-radius: 4px;
  border: none;
  outline: none;
  color: #fff;
  font-size: 16px;
  transition: all 0.3s ease-in-out;
`;
