import { FC } from "react";
import "./Post.css";
import fallback from "../../images/fallback.png";
import Button from "../Button/Button";
import { PostProps } from "../../interfaces/post";
import { format_date } from "../../common/helpers";
import { show } from "../../api/show";
import { useAppDispatch,useAppSelector } from "../../common/hooks";
import { setFormType } from "../../features/form/formSlice";
import { FormType } from "../../interfaces/form_values";
import { setPost } from "../../features/post/postSlice";
import { remove } from "../../api/remove";
import { setRefreshPosts } from "../../features/post/postSlice";
import { setIsOpen } from "../../features/modal/modalSlice";

const Post: FC<PostProps> = (props: PostProps) => {
  const dispatch = useAppDispatch();
  const { refresh_posts } = useAppSelector(state => state);

  let created_at = format_date(props.created_at);
  let updated_at = format_date(props.updated_at);
  

  let setDefaultImage = (ev: any) => {
    ev.target.src = fallback;
  };

  let removeAndRefresh = (id: number) => {
    remove(id)
    .then((_response) => {
      dispatch(setRefreshPosts(refresh_posts + 1));
    });
  };

  let view = async (id: number) => {
    let post = await show(id);
    dispatch(setFormType(FormType.UPDATE));
    dispatch(setPost(post));
    dispatch(setIsOpen(true));
  };

  return (
    <div className="post">
  
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
          text={"View"}
          type={"button"}
          onClick={() => view(props.id)}
        />
        <Button
          text={"Delete"}
          type={"button"}
          onClick={() => removeAndRefresh(props.id)}
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
