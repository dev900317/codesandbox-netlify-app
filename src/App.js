import "./styles.css";
import { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";

const MainWrapper = styled.div`
  margin: 0 auto;
  max-width: 500px;
  padding: 40px;
`;

export default function App() {
  const [todos, setTodos] = useState([
    {
      title: "first task",
      id: 1
    },
    {
      title: "second task",
      id: 2
    },
    {
      title: "third task",
      id: 3
    }
  ]);

  const addTodo = (title) => {
    setTodos([...todos, { title, id: uuidv4() }]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <MainWrapper>
      <NewTodo addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} />
    </MainWrapper>
  );
}
