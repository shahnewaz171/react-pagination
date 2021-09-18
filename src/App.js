import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Posts from './components/Posts/Posts';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setPosts(res.data);
      setLoading(false);
    }
    fetchPosts();
  }, [])

  return (
    <div className="App">
      <div className="tw-container tw-ml-10 tw-mt-14">
        <h1 className="tw-text-green-800 tw-mb-8">My Blogs</h1>
        <Posts posts={posts} loading={loading} />
      </div>
    </div>
  );
}

export default App;
