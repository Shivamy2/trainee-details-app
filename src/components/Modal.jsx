import { memo } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import ReactDOM from "react-dom";

const Modal = ({ children, setModalOpen, showClose }) => {
  return ReactDOM.createPortal(
    <div
      style={{
        top: window.scrollY,
      }}
      className="position-absolute h-100 w-100"
    >
      <div className="position-absolute bg-dark opacity-75 h-100 w-100"></div>
      <div className="position-fixed top-50 start-50 modal-body bg-white rounded p-1 p-md-4">
        {showClose && (
          <div className="position-fixed end-0 top-0">
            <AiFillCloseCircle
              size={30}
              className="modal-body__icon"
              onClick={() => {
                setModalOpen(false);
                document.body.style.overflow = "scroll";
              }}
            />
          </div>
        )}
        <div>{children}</div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default memo(Modal);
