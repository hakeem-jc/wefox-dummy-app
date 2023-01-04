import { FC } from "react";
import "./ShowPosts.css";
import Post from "../Post/Post";
import Button from "../Button/Button";

const ShowPosts: FC = () => {
  return (
    <main className="show_posts">
      <nav className="show_posts__header">
        <h1 className="show_posts__title global-title">Posts</h1>

        <Button text={"New"} type={"button"} />
      </nav>

      {/* TODO - Map this to multiple posts */}
      <section className="show_posts__container">
        <Post />
      </section>
    </main>
  );
};

export default ShowPosts;
