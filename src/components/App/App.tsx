import AddTodoForm from "../AddTodoForm/AddTodoForm";
import { Container } from "../Container/Container";
import TodoList from "../TodoList/TodoList";

import "./App.css";

function App() {
  return (
    <Container>
      <AddTodoForm />
      <TodoList />
    </Container>
  );
}

export default App;
