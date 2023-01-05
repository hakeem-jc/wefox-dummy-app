import { FC, useEffect, useState } from "react";
import "./ShowPosts.css";
import Post from "../Post/Post";
import { PostProps } from '../../interfaces/post';
import axios from "axios";

const ShowPosts: FC = () => {
  const [posts, setPosts] = useState<PostProps[]>();
  const [isLoading, setIsLoading] = useState(true);

  
  useEffect(() => {
    // TODO -  Add redux toolkit to make state global then export this to api folder
    axios.get(`${process.env.REACT_APP_SERVER_URL}/api/v1/posts`)
    .then(response => {
      setPosts(response.data);
      setIsLoading(false);
    })
    .catch(error => {
      console.error(error);
    });
  },[]);

  const Posts = (posts !== null && posts !== undefined && posts.length !== 0) ?
              posts.map((post,index) => {
                return <Post {...post} key={index}/>;
              })
              :
              <h1>No Posts, Add Some to Get Started</h1>;

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
