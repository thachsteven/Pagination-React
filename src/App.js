import React, { useEffect, useState } from "react";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";

const App = () => {
  const sampleData = [
    {
      key: "qq",
      title: "How To Have A Good Listening Ear For Music",
      views: 100,
      host: "Nguyen Nam",
    },
    {
      key: "ww",
      title: "4 Weeks Photography Bootcamp",
      views: 200,
      host: "Design Master",
    },
    {
      key: "ee",
      title: "Become A Social Media Expert",
      views: 300,
      host: "John Dang",
    },
    {
      key: "rr",
      title: "Embark On The Journey Of Becoming An Artist",
      views: 500,
      host: "Mastery",
    },
    {
      key: "qq",
      title: "How To Have A Good Listening Ear For Music",
      views: 100,
      host: "Nguyen Nam",
    },
    {
      key: "ww",
      title: "4 Weeks Photography Bootcamp",
      views: 200,
      host: "Design Master",
    },
    {
      key: "ee",
      title: "Become A Social Media Expert",
      views: 300,
      host: "John Dang",
    },
    {
      key: "rr",
      title: "Embark On The Journey Of Becoming An Artist",
      views: 500,
      host: "Mastery",
    },
    {
      key: "ww",
      title: "4 Weeks Photography Bootcamp",
      views: 200,
      host: "Design Master",
    },
    {
      key: "ee",
      title: "Become A Social Media Expert",
      views: 300,
      host: "John Dang",
    },
    {
      key: "rr",
      title: "Embark On The Journey Of Becoming An Artist",
      views: 500,
      host: "Mastery",
    },
  ];

  const [posts, setPosts] = useState(sampleData);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5); //Set your number display items

  //Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <h1>My Blog</h1>
      <Posts posts={currentPosts} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default App;
