import styled from "styled-components";

export const TermsPage = styled.div`
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
`;
export const TermsBody = styled.div`
  width: 60%;
  min-height: 100%;
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
