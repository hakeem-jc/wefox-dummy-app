import { FC } from "react";
import "./ShowPosts.css";
import Post from "../Post/Post";
import Button from "../Button/Button";

const ShowPosts: FC = () => {
  return (
    <main className="show_posts">

      {/* TODO - Map this to multiple posts */}
      <section className="show_posts__container">
        <Post />
        <Post />
      </section>
    </main>
  );
};

export default ShowPosts;
