import "./App.css";
import Posts from "./components/Posts";
import blogPosts from "./blog-posts.js";
import { useState } from "react";

function App() {
  const [posts, setPosts] = useState(blogPosts);

  const handleLikeClick = (index) => {
    const updatedPosts = [...posts];
    updatedPosts[index].likes += 1;
    setPosts(updatedPosts);
  };

  const handleDislikeClick = (index) => {
    const updatedPosts = [...posts];
    if (updatedPosts[index].likes > 0) {
      updatedPosts[index].likes -= 1;
    }
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
