import { FC, ReactNode } from "react";
import './Modal.css';


interface ModalProps {
    isOpen: boolean;
    children: ReactNode
}

const Modal:FC<ModalProps> = (props) => {
    return (
        <section className="modal">
            <div className="modal__content">
                {props.children}
            </div>
        </section>
    );
}

export default Modal;