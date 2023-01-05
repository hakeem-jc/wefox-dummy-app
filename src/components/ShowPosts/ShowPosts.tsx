import { FC, useEffect, useState } from "react";
import "./ShowPosts.css";
import Post from "../Post/Post";
import { PostProps } from '../../interfaces/post';

const ShowPosts: FC = () => {
  const [posts, setPosts] = useState<PostProps[]>();
  const [isLoading, setIsLoading] = useState(true);

  
  // TODO Switch to axzios and write why
  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/api/v1/posts`)
    .then(response => response.json())
    .then(data => {
        setPosts(data);
        setIsLoading(false);
    })
    .catch(error => {
      console.error(error);
    })
  },[]);

  const Posts = (posts !== null && posts !== undefined && posts.length !== 0) ?
              posts.map((post,index) => {
                return <Post {...post} key={index}/>;
              })
              :
              <h1>No Posts, Add Some to Get Started</h1>;

  // TODO - Add Loading screen
  if (isLoading) return <div className="show_posts__loader_container"></div>;    

  return (
    <main className="show_posts">     
      <section className="show_posts__container">
        {Posts}
      </section>
    </main>
  );
};

export default ShowPosts;
