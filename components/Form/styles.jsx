import styled from "styled-components";

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  background: transparent;
  position: relative;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  margin-bottom: 20px;
  background: none;
`;

export const Input = styled.input`
  color: #fff;
  border-top: none;
  border-left: none;
  border-right: none;
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
  color: #fff;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom-width: 2px;
  padding: 10px 0px;
  font-size: 25px;
  font-family: inherit;
  resize: none;
  outline: none;
  opacity: 1;
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
  font-size: 30px;
  padding: 10px 80px;
  margin-top: 50px;
  border: 1px solid #E6E6E6;
  transition: background 200ms ease;
  &:hover,
  &:focus {
    background-color: #052cab;
  }
  @media (max-width: 950px) {
    width: 100%;
  }
`;
