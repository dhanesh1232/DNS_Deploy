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
`;
export const ContactPageHeading = styled.h1`
  transition: 0.3s all ease-in-out;
  text-align: center;
  color: ${(props) => (JSON.parse(props.headcolor) ? "#fff" : "#262626")};
`;

export const ContactInfoPage = styled.div`
  width: 50%;
  max-height: 95%;
  min-height: 93%;
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
  width: 100%;
  margin-top: 25px;
  flex-direction: column;
  transition: all 0.3s ease-in-out;
`;
export const ContactData = styled.a`
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
export const DataSpan = styled.span`
  text-decoration: none;
  &:hover {
    color: #0494ef;
  }
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
  color: ${(props) => props.labelcolor};
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
`;
export const ContactFormHeading = styled.h2`
  font-size: 25px;
  color: gray;
`;
