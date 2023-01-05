import { FC, useEffect, useState } from "react";
import "./ShowPosts.css";
import Post from "../Post/Post";
import { PostProps } from '../../interfaces/post';

const ShowPosts: FC = () => {
  const [posts, setPosts] = useState<PostProps[]>();

  // TODO - Add Loading screen
  useEffect(() => {
    fetch('http://localhost:8080/api/v1/posts')
    .then(response => response.json())
    .then(data => setPosts(data))
    .catch(error => {
      console.error(error);
    })
  },[]);

// TODO - Add empty posts check
  const Posts = posts !== null && posts !== undefined ?
              posts.map((post,index) => {
                return <Post {...post} key={index}/>;
              })
              :
              <div></div>;

  return (
    <main className="show_posts">     
      <section className="show_posts__container">
        {Posts}
      </section>
    </main>
  );
};

export default ShowPosts;
