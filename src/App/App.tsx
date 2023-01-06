import { FC, useState } from "react";
import "./App.css";
import ShowPosts from "../components/ShowPosts/ShowPosts";
import Button from "../components/Button/Button";
import Modal from "../components/Modal/Modal";
import PostForm from "../components/PostForm/PostForm";

const App: FC = () => {
  const [openModal, setOpenModal] = useState(false);

  
  // TODO - Move Modal here and make its state management global
  return (
    <div className="app">
      <Modal isOpen={openModal} close={()=>setOpenModal(false)}>
        <PostForm />
      </Modal>

      <header className="app__header_container">
        <nav className="app__header">
          <h1 className="app__title">Posts</h1>

          <Button
            text={"New"}
            type={"button"}
            onClick={() => setOpenModal(true)}
          />
        
        </nav>
      </header>
     
      <ShowPosts />
    </div>
  );
};

export default App;
