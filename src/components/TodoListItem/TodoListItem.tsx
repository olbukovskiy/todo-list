import React, { useState } from "react";
import cutStr from "../../helpers/functions";
import { TodoItem } from "../../helpers/types";
import { toggleStatus } from "../../redux/todoSlice";
import hooks from "../hooks/redux-hooks";
import { Modal } from "../Modal/Modal";

import "./TodoListItem.css";

const TodoListItem: React.FunctionComponent<TodoItem> = ({
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
    <li className="list-item">
      <div className="list-content-wrapper" onClick={openModal}>
        <p>{id}</p>
        <p>{cutStr(title)}</p>
        <p>{cutStr(description)}</p>
      </div>

      <label
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <input type="checkbox" checked={status} onChange={handleChange} />
      </label>

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
    </li>
  );
};

export default React.memo(TodoListItem);
