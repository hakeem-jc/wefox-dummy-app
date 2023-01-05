import { FC } from "react";
import './Post.css';
import Button from "../Button/Button";
import { PostProps } from "../../interfaces/post";
import { format_date } from "../../helpers";

const Post:FC<PostProps> = (props:PostProps) => {  

    let created_at = format_date(props.created_at);
    let updated_at = format_date(props.updated_at);

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

            <div className="post__data">
                <p className="post__data_text">Posted: {created_at}</p>
                <p className="post__data_text">Updated: {updated_at}</p>
            </div>
        </div>
    );
}

export default Post;