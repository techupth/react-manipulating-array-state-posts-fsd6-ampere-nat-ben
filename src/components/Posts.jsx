import { useState } from "react";
function Posts(props) {
  const post = props.post;
  const [counter, setCounter] = useState(post.likes);
  const handleLikeClick = () => setCounter(counter + 1);
  const handleDislikeClick = () =>
    counter <= 0 ? counter : setCounter(counter - 1);
  return (
    <div className="app-wrapper">
      <h1 className="app-title">Posts</h1>
      <div className="post-list">
        <div className="post-item">
          <div className="post-header">
            <h2>{post.title}</h2>
            <div className="post-social-media-stats">
              <span className="stats-topic">Likes: </span>
              <span className="post-likes">{counter}</span>
            </div>
          </div>
          <p className="post-content">{post.content}</p>
          <div className="post-actions">
            <button className="like-button" onClick={handleLikeClick}>
              Like
            </button>
            <button className="dislike-button" onClick={handleDislikeClick}>
              Dislike
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
