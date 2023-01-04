import { FC } from 'react';
import './App.css';
import ShowPosts from '../pages/ShowPosts/ShowPosts';
import NewPosts from '../pages/NewPosts/NewPosts';

const App:FC = () => {
  return (
    <div className="app">
      {/* TODO - Swith to router*/}
      <ShowPosts />
      {/* <NewPosts /> */}
      
     
    </div>
  );
}

export default App;
