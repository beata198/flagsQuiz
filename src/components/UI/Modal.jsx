import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ open, children, onClose }) => {
  const dialog = useRef();
  const classesModal = open
    ? "backdrop:opacity-70 backdrop:bg-primary bg-default py-10 px-16 rounded-md border border-card shadow-custom flex flex-col items-center"
    : undefined;

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog className={classesModal} ref={dialog} onClose={onClose}>
      {open ? children : null}
    </dialog>,
    document.getElementById("modal")
  );
};

export default Modal;
