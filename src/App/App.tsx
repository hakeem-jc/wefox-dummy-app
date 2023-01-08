import { FC, useState } from "react";
import "./App.css";
import ShowPosts from "../components/ShowPosts/ShowPosts";
import Button from "../components/Button/Button";
import Modal from "../components/Modal/Modal";
import PostForm from "../components/PostForm/PostForm";
import Post from "../components/Post/Post";
import { useAppSelector, useAppDispatch } from "../common/hooks";
import { setIsOpen, setModalType } from "../features/modal/modalSlice";

const App: FC = () => {
  const dispatch = useAppDispatch();
  const { modal_type } = useAppSelector(state => state);

  const openModal = () => {
    dispatch(setIsOpen(true));
    dispatch(setModalType('new_post'));
}

 
  return (
    <div className="app">
      <Modal>
        {modal_type === 'new_post' && <PostForm/>}
      </Modal>

      <header className="app__header_container">
        <nav className="app__header">
          <h1 className="app__title">Posts</h1>

          <Button
            text={"New"}
            type={"button"}
            onClick={() => openModal()}
          />
        
        </nav>
      </header>
     
      <ShowPosts />
    </div>
  );
};

export default App;
