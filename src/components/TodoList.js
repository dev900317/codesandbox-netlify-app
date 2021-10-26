import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

// ANIMATION
const container = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.2,
      when: "beforeChildren",
      staggerChildren: 0.3,
      staggerDirection: 1
    }
  }
};

const item = {
  hidden: { x: -30, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 0.2, type: "spring" } },
  exit: {
    x: -30,
    opacity: 0,
    transition: {
      duration: 0.3,
      type: "spring"
    }
  },
  hover: { scale: 1.1, originX: 0 }
};

// STYLING
const StyledItem = styled(motion.li)`
  font-size: 24px;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  padding: 4px 0;
`;

const StyledList = styled(motion.ol)`
  /* list-style-type: none; */
  padding: 40px 24px;
`;

// COMPONENT
const TodoList = ({ todos, removeTodo }) => {
  const handleRemove = (e) => {
    const title = e.target.textContent;
    removeTodo(title);
  };

  return (
    <StyledList variants={container} initial="hidden" animate="show">
      <AnimatePresence>
        {todos.map((todo) => {
          return (
            <StyledItem
              variants={item}
              exit="exit"
              initial="hidden"
              animate="show"
              whileHover="hover"
              key={todo.id}
              onClick={handleRemove}
            >
              {todo.title}
            </StyledItem>
          );
        })}
      </AnimatePresence>
    </StyledList>
  );
};

export default TodoList;
