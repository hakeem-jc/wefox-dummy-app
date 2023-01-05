import { FC, useState } from "react";
import "./Post.css";
import fallback from "../../images/fallback.png";
import Button from "../Button/Button";
import { PostProps } from "../../interfaces/post";
import { format_date } from "../../common/helpers";
import axios from "axios";
import { API_URL } from "../../common/constants";
import { show } from "../../api/requests";
import Modal from "../Modal/Modal";
import PostForm from "../PostForm/PostForm";
import { useAppSelector, useAppDispatch } from "../../common/hooks";

const Post: FC<PostProps> = (props: PostProps) => {
  const [openModal, setOpenModal] = useState(false);
  let created_at = format_date(props.created_at);
  let updated_at = format_date(props.updated_at);
  

  let setDefaultImage = (ev: any) => {
    ev.target.src = fallback;
  };

  let remove = (id: number) => {
    axios.delete(`${API_URL}/${id}`).then(() => {
      alert("Post deleted!");
      document.location.reload();
    });
  };

  let update = async (id: number) => {
    let post = await show(id);
    setOpenModal(true);
    console.log(post);
    // Show Modal and pass data
  };

  return (
    <div className="post">
      <Modal isOpen={openModal} close={()=>setOpenModal(false)}>
        <PostForm />
      </Modal>

      <img
        src={props.image_url}
        className="post__image"
        onError={setDefaultImage}
        alt="Post"
      />

      <h3 className="post__title">{props.title}</h3>
      <p className="post__text">{props.content}</p>

      <div className="post__button_container">
        <Button
          text={"Update"}
          type={"button"}
          onClick={() => update(props.id)}
        />
        <Button
          text={"Delete"}
          type={"button"}
          onClick={() => remove(props.id)}
        />
      </div>

      {/* TODO - Add Map */}
      <div className="post__data">
        <p className="post__data_text">Lat: {props.lat}</p>
        <p className="post__data_text">Long: {props.long}</p>
      </div>

      <div className="post__data">
        <p className="post__data_text">Posted: {created_at}</p>
        <p className="post__data_text">Updated: {updated_at}</p>
      </div>
    </div>
  );
};

export default Post;
