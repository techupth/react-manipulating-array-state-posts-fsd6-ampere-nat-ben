function Posts(props) {
  const post = props.post;
  const handleLikeClick = props.handleLikeClick;
  const handleDislikeClick = props.handleDislikeClick;

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Posts</h1>
      <div className="post-list">
        <div className="post-item">
          <div className="post-header">
            <h2>{post.title}</h2>
            <div className="post-social-media-stats">
              <span className="stats-topic">Likes: </span>
              <span className="post-likes">{post.likes}</span>
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
