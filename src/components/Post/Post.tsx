import { FC } from "react";
import './Post.css';
import temp from '../../images/pic.jpg';

const Post:FC = () => {
    return (
        <div className="">
            <img src={temp} alt="Post"/>

        </div>
    );
}

export default Post;