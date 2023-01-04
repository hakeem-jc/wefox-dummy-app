import { FC } from "react";
import "./App.css";
import ShowPosts from "../components/ShowPosts/ShowPosts";
import NewPosts from "../components/NewPosts/NewPosts";

const App: FC = () => {
  return (
    <div className="app">
      <NewPosts />
      <ShowPosts />
    </div>
  );
};

export default App;
