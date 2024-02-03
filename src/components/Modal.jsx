import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";

const Modal = ({ open, onClose, children }) => {
  const dialog = useRef();

  useEffect(() => {
    console.log("Run useEffect");
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  console.log("Run modal component");

  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal"),
  );
};

export default Modal;
