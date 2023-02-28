import { useState } from "react";
import cutStr from "../../helpers/functions";
import { TodoItem } from "../../helpers/types";
import { toggleStatus } from "../../redux/todoSlice";
import hooks from "../hooks/redux-hooks";
import { Modal } from "../Modal/Modal";

import "./TodoTableItem.css";

const TodoTableItem: React.FunctionComponent<TodoItem> = ({
  id,
  title,
  description,
  status,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = hooks.useAppDispatch();

  const handleChange = () => dispatch(toggleStatus(id));

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <tr onClick={openModal} id={id}>
        <td>{id}</td>
        <td>{cutStr(title)}</td>
        <td>{cutStr(description)}</td>
        <td>
          <input type="checkbox" checked={status} onChange={handleChange} />
        </td>
      </tr>
      {modalOpen && (
        <Modal onClose={closeModal}>
          <div>
            <p className="title">{title}</p>
            <p className="description">{description}</p>
            <label className="input-wrapper">
              <p>Status:</p>
              <input type="checkbox" checked={status} onChange={handleChange} />
            </label>
            <button className="close-btn" type="button" onClick={closeModal}>
              Close
            </button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default TodoTableItem;
