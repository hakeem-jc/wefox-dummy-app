import { FC } from "react";
import './Post.css';
import temp from '../../images/pic.jpg';

const Post:FC = () => {
    return (
        <div className="post">
            <img src={temp} className="post__image" alt="Post"/>

        </div>
    );
}

export default Post;