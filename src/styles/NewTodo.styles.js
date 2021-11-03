import styled from "styled-components";

export const Input = styled.input`
  font-family: "Inter", sans-serif;
  font-size: 100%;
  padding: 16px 32px;
  border: none;
  border-radius: 4px;
  outline: none;
  margin-bottom: 16px;
  caret-color: orangered;
  font-weight: 700;
  letter-spacing: 1px;
  position: relative;

  &::placeholder {
    color: black;
    opacity: 0.3;
    font-weight: 500;
    font-size: 13px;
    letter-spacing: 0;
  }
`;

export const Label = styled.label`
  font-family: "Inter", sans-serif;
  margin-bottom: 8px;
  font-weight: 700;
  letter-spacing: 0.5px;
  align-self: center;
  margin-bottom: 24px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SubmitBtn = styled.button`
  padding: 16px 32px;
  align-self: center;
  border: none;
  border-radius: 4px;
  outline: none;
  font-family: "Inter", sans-serif;
  text-transform: uppercase;
  font-weight: 700;
  color: white;
  background-color: black;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.2s ease;

  &:active {
    transform: translateY(2px);
    box-shadow: 0 1px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const StyledEmoji = styled.span`
  font-size: 64px;
`;
