import AddTodoForm from "../AddTodoForm/AddTodoForm";
import { Container } from "../Container/Container";
import TodoList from "../TodoList/TodoList";
// import TodoTable from "../TodoTable/TodoTable";
import "./App.css";

function App() {
  return (
    <Container>
      <AddTodoForm />
      <TodoList />
      {/* <TodoTable /> */}
    </Container>
  );
}

export default App;
