import { FC } from "react";
import './Post.css';
import Button from "../Button/Button";
import { PostProps } from "../../interfaces/post";


const Post:FC<PostProps> = (props:PostProps) => {
    return (
        <div className="post">
            <img src={props.image_url} className="post__image" alt="Post"/>
            
            <h3 className="post__title">{props.title}</h3>
            <p className="post__text">{props.content}</p>

            <div className="post__button_container">
                <Button text={"Update"} type={"button"}/>
                <Button text={"Delete"} type={"button"}/>
            </div>
            {/* TODO - Add Map */}
            <div className="post__data">
                <p className="post__data_text">Lat: {props.lat}</p>
                <p className="post__data_text">Long: {props.long}</p>
            </div>
            {/* TODO - Format date */}
            <div className="post__data">
                <p className="post__data_text">Posted: {props.created_at}</p>
                <p className="post__data_text">Updated: {props.updated_at}</p>
            </div>
        </div>
    );
}

export default Post;