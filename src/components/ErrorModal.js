import { PropTypes } from "prop-types";
import ReactDOM from "react-dom";
import Backdrop from "./UI/Backdrop";
import Modal from "./UI/Modal";

const ErrorModal = ({ message, onClose }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-area")
      )}
      {ReactDOM.createPortal(
        <Modal message={message} onClose={onClose} />,
        document.getElementById("modal-area")
      )}
    </>
  );
};

ErrorModal.defaultProps = {
  message: "Something went wrong",
};

ErrorModal.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ErrorModal;
