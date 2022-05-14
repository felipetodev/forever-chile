import styled from "styled-components";

export const Container = styled.div`
  @media (max-width: 1070px) {
    margin-left: 80px;
    margin-right: 6.2222%;
    & .margin-left {
      display: none;
    }
    & ._3 {
      display: none;
    }
  }
  @media (max-width: 675px) {
    margin-left: 50px;
  }
  @media (max-width: 400px) {
    width: min(800px, 84%);
    margin: 0 auto;
  }
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  background: transparent;
  position: relative;
  @media (max-width: 500px) {
    top: -170px;
    margin-bottom: -35px;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  margin-bottom: 20px;
  background: none;
`;

export const Input = styled.input`
  color: inherit;
  font-family: inherit;
  border-radius: 0%;
  border-top: none;
  border-left: none;
  border-right: none;
  border-color: rgba(230, 230, 230, 0.5);
  padding: 10px 0px;
  min-height: 35px;
  font-size: 25px;
  outline: none;
  background: none;
  transition: border 300ms ease;
  &:focus {
    border-color: #052cab;
  }
`;

export const TextArea = styled.textarea`
  color: inherit;
  border-radius: 0%;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom-width: 2px;
  border-color: rgba(230, 230, 230, 0.5);
  padding: 10px 0px;
  font-size: 25px;
  font-family: inherit;
  resize: none;
  outline: none;
  min-height: fit-content;
  background: none;
  transition: all 300ms ease;
  &:focus {
    border-color: #052cab;
  }
`;

export const CallbackMessage = styled.span`
  margin-top: 40px;
`;

export const Button = styled.button`
  cursor: pointer;
  width: fit-content;
  outline: none;
  font-size: 22px;
  padding: 10px 80px;
  margin-top: 50px;
  border: 1px solid #e6e6e6;
  font-family: inherit;
  transition: background 200ms ease;
  &:hover,
  &:focus {
    background-color: #052cab;
  }
  @media (max-width: 950px) {
    width: 100%;
  }
`;
