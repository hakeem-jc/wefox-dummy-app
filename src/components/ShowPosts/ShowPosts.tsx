import { FC } from "react";
import "./ShowPosts.css";
import Post from "../Post/Post";
import { PostProps } from '../../interfaces/post';

const ShowPosts: FC = () => {

  const mock_data:PostProps[] = [
    {
        "id": 1,
        "title": "Madrid",
        "content": "Madrid is the capital of Spain and the largest municipality in both the Community of Madrid and Spain as a whole.",
        "lat": "40.41678",
        "long": "-3.70379",
        "image_url": "https://c2.staticflickr.com/2/1269/4670777817_d657cd9819_b.jpg",
        "created_at": "2022-06-20T12:09:47.921Z",
        "updated_at": "2022-06-20T12:09:47.921Z"
    },
    {
        "id": 2,
        "title": "Barcelona",
        "content": "Barcelona is the capital and largest city of Catalonia with a population of 1.6 million within city limits.",
        "lat": "41.3851",
        "long": "2.1734",
        "image_url": "https://static.independent.co.uk/s3fs-public/styles/story_medium/public/thumbnails/image/2017/05/17/15/barcelona-skyline.jpg",
        "created_at": "2022-06-20T12:09:47.924Z",
        "updated_at": "2022-06-20T12:09:47.924Z"
    },
    {
        "id": 3,
        "title": "Berlin",
        "content": "Berlin is the capital and the largest city of Germany as well as one of its 16 constituent states. With a population of approximately 3.7 million, Berlin is the second...",
        "lat": "52.5065133",
        "long": "13.1445548",
        "image_url": "https://lonelyplanetwp.imgix.net/2015/12/brandenburg-gate-berlin-GettyRF-1500-cs.jpg",
        "created_at": "2022-06-20T12:09:47.927Z",
        "updated_at": "2022-06-20T12:09:47.927Z"
    }
]
  const Posts = mock_data.map((post,i) => {
    return <Post {...post}/>;
  })

  return (
    <main className="show_posts">

      {/* TODO - Map this to multiple posts */}
      
      <section className="show_posts__container">
        {Posts}
      </section>
    </main>
  );
};

export default ShowPosts;
