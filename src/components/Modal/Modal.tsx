import React, { useEffect } from "react";
import { createPortal } from "react-dom";

import css from "./Modal.module.css";

type Props = {
  onClose: () => void;
  children?: React.ReactNode;
};

const modalRoot = document.querySelector("#modal-root")! as HTMLDivElement;

declare global {
  interface WindowEventMap {
    keydown: React.KeyboardEvent<HTMLButtonElement>;
  }
}

export const Modal: React.FunctionComponent<Props> = function ({
  onClose,
  children,
}) {
  useEffect(() => {
    const onEscHandler = (
      event: React.KeyboardEvent<HTMLButtonElement>
    ): void => {
      if (event.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onEscHandler);
    return () => window.removeEventListener("keydown", onEscHandler);
  }, [onClose]);

  const onBackdropClickHandler = (
    event: React.MouseEvent<HTMLDivElement>
  ): void => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div className={css.backdrop} onClick={onBackdropClickHandler}>
      <div className={css.modal}>{children}</div>
    </div>,
    modalRoot
  );
};
