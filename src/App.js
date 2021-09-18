import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Posts from './components/Posts/Posts';
import Pagination from './components/Pagination/Pagination';
import  './App.css';

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

  // For posts length
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  console.log(currentPosts);
  
  // Change page number
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  return (
    <div className="App">
      <div className="tw-container tw-ml-10 tw-mt-14">
        <h1 className="tw-text-green-800 tw-mb-8">My Blogs</h1>
        <Posts posts={currentPosts} loading={loading} />
        <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
      </div>
    </div>
  );
}


export default App;
