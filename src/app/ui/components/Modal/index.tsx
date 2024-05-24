import './style.css';

interface ModalProps {
    children: React.ReactNode;
    onClose: () => void;
}
  
const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="modal-close-button">Close</button>
        {children}
      </div>
    </div>
  );
};
  
export default Modal;