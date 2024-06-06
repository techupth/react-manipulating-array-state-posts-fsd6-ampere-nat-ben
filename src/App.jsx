import "./App.css";
import Posts from "./components/Posts";
import blogPosts from "./blog-posts.js";
import { useState } from "react";

function App() {
  const [posts, setPosts] = useState(blogPosts);
  return (
    <>
      <div className="App">
        {posts.map((post, index) => (
          <Posts
            key={post.id}
            post={post}
            posts={posts}
            setPosts={setPosts}
            index={index}
          />
        ))}
      </div>
    </>
  );
}

export default App;
