import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const container = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
      staggerDirection: 1
    }
  }
};

const item = {
  hidden: { x: -30, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 0.5, type: "spring" } },
  exit: { y: -50, opacity: 0, transition: { duration: 0.3, type: "spring" } },
  hover: { scale: 1.5, originX: 0 }
};

const StyledItem = styled(motion.li)`
  font-size: 18px;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
`;

const StyledList = styled(motion.ul)`
  list-style-type: none;
`;

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
