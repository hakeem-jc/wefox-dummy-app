import { FC } from "react";
import './Post.css';
import temp from '../../images/pic.jpg';
import Button from "../Button/Button";

const Post:FC = () => {
    return (
        <div className="post">
            <img src={temp} className="post__image" alt="Post"/>
            
            <h3 className="post__title">Berlin</h3>
            <p className="post__text">Berlin is the capital and the largest city 
            of Germany as well as one of its 16
            constituent states. With a population 
            of approximately 3.7 million, 
            Berlin is the second...</p>

            <div className="post__button_container">
                <Button text={"Update"} type={"button"}/>
                <Button text={"Delete"} type={"button"}/>
            </div>

            <div className="post__data">
                <p className="post__data_text">Posted: 3/1/2023 11:00 pm</p>
                <p className="post__data_text">Updated: 3/1/2023 11:11 pm</p>
            </div>
        </div>
    );
}

export default Post;