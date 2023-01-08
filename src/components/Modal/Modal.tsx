import { FC, ReactNode } from "react";
import './Modal.css';
import { useAppSelector, useAppDispatch  } from "../../common/hooks";
import { setIsOpen } from "../../features/modal/modalSlice";

interface ModalProps {
    children: ReactNode;
}

const Modal:FC<ModalProps> = (props) => {
  const dispatch = useAppDispatch();
  const is_open = useAppSelector(state => state.is_open);

  const close = () => {
    dispatch(setIsOpen(false));
  }

    return (
        <>
            {is_open  &&
                <section className="modal">
                    <div className="modal__content">
                        <div className="modal__close-btn-container">
                            <span className="modal__close-btn" onClick={()=>close()}>&times;</span>
                        </div>
                        {props.children}
                    </div>
                </section>
            }
        </>
    );
}

export default Modal;