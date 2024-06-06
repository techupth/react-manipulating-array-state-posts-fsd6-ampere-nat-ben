import { useState } from "react";
import { MessagePost } from "../components/MessagePost";

function Posts() {
  const [posts, setPosts] = useState(MessagePost);

  const handleLike = (index) => {
    const newPosts = [...posts];
    newPosts[index].likes += 1;
    setPosts(newPosts);
  };

  const handleDislike = (index) => {
    const newPosts = [...posts];
    if (newPosts[index].likes > 0) {
      newPosts[index].likes -= 1;
    }
    setPosts(newPosts);
  };

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Posts</h1>
      <div className="post-list">
        {posts.map((post, index) => (
          <div className="post-item" key={index}>
            <div className="post-header">
              <h2>Post Title #{post.id}</h2>
              <div className="post-social-media-stats">
                <span className="stats-topic">Likes: </span>
                <span className="post-likes">{post.likes}</span>
              </div>
            </div>
            <p className="post-content">{post.content}</p>
            <div className="post-actions">
              <button className="like-button" onClick={() => handleLike(index)}>
                Like
              </button>
              <button
                className="dislike-button"
                onClick={() => handleDislike(index)}
              >
                Dislike
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;

// <div class="app-wrapper">
//   <h1 class="app-title">Posts</h1>
//   <div class="post-list">
//     <div class="post-item">
//       <div class="post-header">
//         <h2>Post Title #1</h2>
//         <div class="post-social-media-stats">
//           <span class="stats-topic">Likes: </span>
//           <span class="post-likes">10</span>
//         </div>
//       </div>
//       <p class="post-content">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
//         vel turpis vestibulum, aliquet ipsum vitae, auctor risus. Morbi
//         tincidunt, leo non molestie consectetur, elit libero faucibus
//         tellus, sed fringilla tortor libero sit amet odio. Maecenas sed ante
//         condimentum mauris euismod pellentesque eu eu justo...
//       </p>
//       <div class="post-actions">
//         <button class="like-button">Like</button>
//         <button class="dislike-button">Dislike</button>
//       </div>
//     </div>
//   </div>
// </div>
