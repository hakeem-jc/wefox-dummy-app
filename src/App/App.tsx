import { FC } from "react";
import "./App.css";
import ShowPosts from "../components/ShowPosts/ShowPosts";

const App: FC = () => {
  return (
    <div className="app">
      <h1 className="app__title">Posts</h1>
      <ShowPosts />
    </div>
  );
};

export default App;
