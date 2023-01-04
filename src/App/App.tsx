import { FC } from 'react';
import './App.css';
import ShowPosts from '../pages/ShowPosts/ShowPosts';

const App:FC = () => {
  return (
    <div className="app">
      {/* TODO - Swith to router and components */}
      <ShowPosts />
    </div>
  );
}

export default App;
