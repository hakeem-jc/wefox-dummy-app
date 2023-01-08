import { FC, useEffect, useState } from "react";
import "./ShowPosts.css";
import Post from "../Post/Post";
import { PostProps } from "../../interfaces/post";
import { list } from "../../api/list";
import { setPosts } from "../../features/post/postSlice";
import { useAppDispatch, useAppSelector } from "../../common/hooks";

const ShowPosts: FC = () => {
  const dispatch = useAppDispatch();
  const { posts, refresh_posts} = useAppSelector((state) => state);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    list().then((response) => {
      setIsLoading(false);
      dispatch(setPosts(response));
    });
  }, [dispatch,refresh_posts]);

  const Posts =
    posts !== null && posts !== undefined && posts.length !== 0 ? (
      posts.map((post: PostProps, index: number) => {
        return <Post {...post} key={index} />;
      })
    ) : (
      <h1>No Posts, Add Some to Get Started</h1>
    );

  if (isLoading) return <div className="show_posts__loader_container"></div>;

  return (
    <main className="show_posts">
      <section className="show_posts__container">{Posts}</section>
    </main>
  );
};

export default ShowPosts;
