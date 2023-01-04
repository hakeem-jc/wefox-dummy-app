import { FC } from 'react';
import './ShowPosts.css';
import Post from '../../components/Post/Post';
import Button from '../../components/Button/Button';

const ShowPosts:FC = () => {
    return (
      <main className='show_posts'>
        <nav className="show_posts__header">
            <h1 className="show_posts__title">Posts</h1>

            <Button/>
        </nav>

        {/* TODO - Map this to multiple posts */}
        <section className='show_posts__container'>
            <Post/>

        </section>

      </main>
    );
}

export default ShowPosts;