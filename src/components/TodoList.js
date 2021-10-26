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
  exit: {
    x: -100,
    opacity: 0,
    transition: {
      duration: 0.4,
      type: "spring",
      stiffness: 150
    }
  },
  hover: { scale: 1.1, originX: 0 }
};

const StyledItem = styled(motion.li)`
  font-size: 24px;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  padding: 4px 0;
`;

const StyledList = styled(motion.ul)`
  /* list-style-type: none; */
  padding: 40px 0;
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
