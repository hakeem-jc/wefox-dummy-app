import { FC, ReactNode } from "react";
import './Modal.css';


interface ModalProps {
    isOpen: boolean;
    children: ReactNode;
    close: () => void;
}

const Modal:FC<ModalProps> = (props) => {

    return (
        <>
            {props.isOpen &&
                <section className="modal">
                    <div className="modal__content">
                        <span className="modal__close-btn" onClick={()=>props.close()}>&times;</span>
                        {props.children}
                    </div>
                </section>
            }
        </>
    );
}

export default Modal;