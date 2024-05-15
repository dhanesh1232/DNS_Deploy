import styled from "styled-components";

export const ContactPage = styled.div`
  width: 100vw;
  height: 90vh;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
  z-index: 100;
  scroll-behavior: smooth;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    height: 92vh;
  }
  &::-webkit-scrollbar {
    width: 0px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 0px;
  }
`;
export const ContactHead = styled.h1`
  font-size: 32px;
  color: ${(props) => (JSON.parse(props.textcolor) ? "#fff" : "#262626")};
  transition: all 0.3s ease-in-out;
  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
`;
export const ContactBody = styled.div`
  width: 50%;
  height: 100%;
  padding: 15px;
  background: transparent;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    width: 75%;
  }
`;
export const ContactSubHead = styled.h3`
  text-decoration: underline;
  font-size: 20px;
  color: ${(props) => (JSON.parse(props.textcolor) ? "#fff" : "#262626")};
`;
export const ContactGreet = styled.p`
  font-size: 17px;
  letter-spacing: 1.1px;
  font-weight: 500;
  color: gray;
  margin-top: 15px;
`;
export const ContactGreetTwo = styled.p`
  font-size: 16px;
  letter-spacing: 0.8px;
  font-weight: 500;
  color: ${(props) => (JSON.parse(props.textcolor) ? "#fff" : "#000")};
  margin-top: 8px;
`;
export const ContactIconsCon = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
`;
export const ContactInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const NavIconCon = styled.a`
  color: ${(props) => (JSON.parse(props.textcolor) ? "#fff" : "#262626")};
`;
export const ContactActionHead = styled.h3`
  font-size: 20px;
  margin-top: 10px;
  color: ${(props) => (JSON.parse(props.textcolor) ? "#fff" : "#262626")};
`;
export const SocialMedia = styled.ul`
  width: 100%;
  display: flex;
  gap: 10px;
`;
export const NavIcon = styled.a`
  font-size: 25px;
  height: 40px;
  width: 40px;
  background: transparent;
  border: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: ${(props) => props.navcolor};
`;
export const ContactFormCon = styled.div`
  width: 100%;
  height: 15%;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const ConatactCheckCon = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const ConatactCheckLabel = styled.label`
  font-size: 16px;
  color: ${(props) => (JSON.parse(props.textcolor) ? "#fff" : "#262626")};
  cursor: pointer;
  &::selection {
    color: ${(props) => (JSON.parse(props.textcolor) ? "#fff" : "#262626")};
    background: transparent;
    border-radius: 50%;
  }
`;
export const ConatactCheck = styled.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;
export const ContactFormDiv = styled.div`
  width: 50%;
  height: 100%;
  @media screen and (max-width: 768px) {
    width: 75%;
    height: 100%;
  }
`;
export const ContactForm = styled.form`
  width: 100%;
  height: 100%;
`;
export const ContactHeader = styled.div`
  width: 100%;
  background: blue;
  display: flex;
  gap: 10px;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    gap: none;
  }
`;
export const InputGroupHead = styled.div`
  width: 45%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const InputGroup = styled.div`
  width: 100%;
`;
export const InputLabel = styled.label`
  font-size: 16px;
`;
export const ContactInput = styled.input`
  width: 100%;
  height: 2rem;
`;
export const ContactTextarea = styled.textarea`
  width: 100%;
  height: 4rem;
`;
