import { useState } from "react";
import { EventTargetType } from "../../helpers/types";
import { addTask } from "../../redux/todoSlice";
import hooks from "../hooks/redux-hooks";

import "./AddTodoForm.css";

const AddTodoForm: React.FunctionComponent = () => {
  const [titleStatus, setTitleStatus] = useState(true);
  const [descriptionStatus, setDescriptionStatus] = useState(true);
  const [errorMessage] = useState("This field is empty!");
  const dispatch = hooks.useAppDispatch();

  const setInputClass = (isFieldEmpty: boolean) => {
    const classNames = ["text-input"];

    if (!isFieldEmpty) {
      classNames.push("bordered");
    }

    return classNames.join(" ");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as typeof event.target & EventTargetType;

    if (
      target.title.value.length === 0 &&
      target.description.value.length === 0
    ) {
      setTitleStatus(false);
      setDescriptionStatus(false);
      return;
    }

    if (target.title.value.length === 0) {
      setTitleStatus(false);
      setDescriptionStatus(true);
      return;
    }

    if (target.description.value.length === 0) {
      setTitleStatus(true);
      setDescriptionStatus(false);
      return;
    }

    setTitleStatus(true);
    setDescriptionStatus(true);

    dispatch(
      addTask({
        title: target.title.value,
        description: target.description.value,
      })
    );

    event.currentTarget.reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        <p className="label-title">Title</p>
        <input
          className={setInputClass(titleStatus)}
          type="text"
          name="title"
          placeholder="Enter title"
        />
        {!titleStatus && <p className="error-message">{errorMessage}</p>}
      </label>
      <label>
        <p className="label-title">Description</p>
        <input
          className={setInputClass(descriptionStatus)}
          type="text"
          name="description"
          placeholder="Enter description"
        />
        {!descriptionStatus && <p className="error-message">{errorMessage}</p>}
      </label>
      <button className="button" type="submit">
        Create
      </button>
    </form>
  );
};

export default AddTodoForm;
