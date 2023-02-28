import { selectTodos } from "../../redux/selectors";
import hooks from "../hooks/redux-hooks";
import { TodoListItem } from "../TodoListItem/TodoListItem";
import "./TodoList.css";

const TodoList: React.FunctionComponent = () => {
  const todos = hooks.useAppSelector(selectTodos);

  return (
    <div>
      <div className="list-wrapper">
        <h2>ID</h2>
        <h2>TITLE</h2>
        <h2>DESCRIPTION</h2>
        <h2>STATUS</h2>
      </div>

      <ul className="list">
        {todos.map(({ id, title, description, status }) => {
          return (
            <TodoListItem
              key={id}
              id={id}
              title={title}
              description={description}
              status={status}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
