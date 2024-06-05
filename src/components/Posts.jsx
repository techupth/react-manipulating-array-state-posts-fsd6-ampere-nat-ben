function Posts(props) {
  const post = props.post;

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
            <button className="like-button">Like</button>
            <button className="dislike-button">Dislike</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
