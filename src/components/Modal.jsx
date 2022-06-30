import { memo } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

const Modal = ({ children, setModalOpen }) => {
  return (
    <div>
      <div className="position-absolute bg-dark opacity-75 top-0 start-0 end-0 bottom-0"></div>
      <div className="position-absolute top-50 start-50 bg-white modal-body rounded p-2">
        <div className="position-fixed end-0 top-0">
          <AiFillCloseCircle
            size={30}
            className="modal-body__icon"
            onClick={() => setModalOpen(false)}
          />
        </div>
        <div className="pe-4">{children}</div>
      </div>
    </div>
  );
};

export default memo(Modal);
