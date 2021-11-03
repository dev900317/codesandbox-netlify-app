import {
  StyledList,
  StyledItem,
  container,
  item
} from "../styles/TodoList.styles";
import { AnimatePresence } from "framer-motion";

// COMPONENT
const TodoList = ({ todos, removeTodo }) => {
  const handleRemove = (e) => {
    removeTodo(e.target.id);
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
              id={todo.id}
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
