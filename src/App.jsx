import "./App.css";
import Posts from "./components/Posts";
import blogPosts from "./blog-posts.js";

function App() {
  return (
    <div className="App">
      {blogPosts.map((post) => (
        <Posts key={post.id} post={post} />
      ))}
    </div>
  );
}

export default App;
