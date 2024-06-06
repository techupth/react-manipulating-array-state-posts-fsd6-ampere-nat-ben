function Posts(props) {
  const post = props.post;
  const index = props.index;
  const posts = props.posts;
  const setPosts = props.setPosts;

  const handleLikeClick = () => {
    const updatedPosts = posts.map((curPost, curIndex) => {
      if (index === curIndex) {
        return { ...curPost, likes: curPost.likes + 1 };
      }
      return curPost;
    });
    setPosts(updatedPosts);
  };

  const handleDislikeClick = () => {
    const updatedPosts = posts.map((curPost, curIndex) => {
      if (curPost.likes <= 0) {
        return curPost;
      }
      if (index === curIndex) {
        return { ...curPost, likes: curPost.likes - 1 };
      }
      return curPost;
    });
    setPosts(updatedPosts);
  };

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
