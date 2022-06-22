import { PropTypes } from "prop-types";

const Modal = ({ message, onClose }) => {
  return (
      <div className="modal card">
        <p>{message}</p>
        <button className="btn" style={{ backgroundColor: "red" }} onClick={onClose}>
          Close
        </button>
      </div>
  );
};

Modal.propTypes = {
    message: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
}

export default Modal;
