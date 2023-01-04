import './ShowPosts.css';

const ShowPosts = () => {
    return (
      <main className='ShowPosts'>
        <nav className="ShowPosts__header">
            <h1 className="ShowsPosts__title">Posts</h1>
            <ul className="ShowsPosts__options">
                <li>New</li>
            </ul>
        </nav>
      </main>
    );
}

export default ShowPosts;