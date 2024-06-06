import "./App.css";
import Posts from "./components/Posts";
import blogPosts from "./blog-posts.js";
import { useState } from "react";

function App() {
  const [posts, setPosts] = useState(blogPosts);

  const handleLikeClick = (index) => {
    const updatedPosts = posts.map((curPost, curIndex) => {
      if (index === curIndex) {
        return { ...curPost, likes: curPost.likes + 1 };
      }
      return curPost;
    });
    setPosts(updatedPosts);
  };

  const handleDislikeClick = (index) => {
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
    <>
      <div className="App">
        {posts.map((post, index) => (
          <Posts
            key={post.id}
            post={post}
            handleLikeClick={() => handleLikeClick(index)}
            handleDislikeClick={() => handleDislikeClick(index)}
          />
        ))}
      </div>
    </>
  );
}

export default App;
