import { selectTodos } from "../../redux/selectors";
import hooks from "../hooks/redux-hooks";
import TodoTableItem from "../TodoTableItem/TodoTableItem";

import "./TodoTable.css";

const TodoTable: React.FunctionComponent = () => {
  const todos = hooks.useAppSelector(selectTodos);

  return (
    <table>
      <thead className="table-head">
        <tr>
          <th>ID</th>
          <th>TITLE</th>
          <th>DESCRIPTION</th>
          <th>STATUS</th>
        </tr>
      </thead>

      <tbody>
        {todos.map(({ id, title, description, status }) => {
          return (
            <TodoTableItem
              key={id}
              id={id}
              title={title}
              description={description}
              status={status}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default TodoTable;
