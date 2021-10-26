import { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  font-family: "Inter", sans-serif;
  font-size: 100%;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  outline: none;
  margin-bottom: 16px;
  caret-color: orangered;
  font-weight: 700;
  letter-spacing: 1px;

  &::placeholder {
    color: black;
    opacity: 0.3;
    font-weight: 500;
    font-size: 13px;
    letter-spacing: 0;
  }
`;

const Label = styled.label`
  font-family: "Inter", sans-serif;
  margin-bottom: 8px;
  font-weight: 700;
  letter-spacing: 0.5px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubmitBtn = styled.button`
  padding: 8px 16px;
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

const NewTodo = ({ addTodo }) => {
  const [title, setTitle] = useState();

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="newTodo">Type here:</Label>
        <Input
          id="newTodo"
          type="text"
          placeholder="title..."
          value={title}
          onChange={handleChange}
        />
        <SubmitBtn type="submit">Add</SubmitBtn>
      </FormGroup>
    </form>
  );
};

export default NewTodo;
