import styled from "styled-components";

export const ProfilePage = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
`;
export const UnderMaintain = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0;
  margin: 0;
`;
export const UnderImg = styled.img`
  width: 400px;
  height: 400px;
  padding: 0;
  margin: 0;
  @media screen and (max-width: 600px) {
    width: 250px;
    height: 250px;
  }
`;
export const UnderHead = styled.h1`
  font-size: 35px;
   color: ${(props) => (JSON.parse(props.textcolor) ? "#fff" : "#262626")};
  text-align: center;
  padding: 0;
  margin: 0;
  transition: all 0.3s ease-in-out;
  @media screen and (max-width: 600px) {
    font-size: 20px;
  }
`;
export const UnderButton = styled.button`
  width: 15rem;
  height: 3rem;
  background: #0494ef;
  border-radius: 8px;
  border: none;
  outline: none;
  padding: 0;
  font-size: 18px;
  color: #fff;
  cursor: pointer;
  margin-top: 20px;
`;
