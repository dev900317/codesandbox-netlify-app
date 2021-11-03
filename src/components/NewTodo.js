import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import {
  Input,
  Label,
  FormGroup,
  SubmitBtn,
  StyledEmoji
} from "../styles/NewTodo.styles";

const NewTodo = ({ addTodo }) => {
  const [title, setTitle] = useState();
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsEmpty(false);
    }, 2000);
  }, [isEmpty]);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title) {
      addTodo(title);
      setTitle("");
    } else {
      setIsEmpty(true);
    }
  };

  return (
    <motion.form
      initial={{ y: -20, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { duration: 0.2, type: "spring" }
      }}
      onSubmit={handleSubmit}
    >
      <FormGroup>
        <Label htmlFor="newTodo">
          <StyledEmoji role="img" aria-label="man-bowing">
            🙇‍♂️
          </StyledEmoji>
        </Label>

        <Input
          id="newTodo"
          type="text"
          placeholder="title..."
          value={title}
          onChange={handleChange}
        />
        {isEmpty ? <div>You cant add empty task</div> : null}
        <SubmitBtn type="submit">Add ToDo</SubmitBtn>
      </FormGroup>
    </motion.form>
  );
};

export default NewTodo;
