"use client";
import { useEffect, useState } from "react";
import getPostMetadata from "./getPostMetadata";
import PostPreview from "./PostPreview";
import "./css/posts.css";

const PostsListingPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postMetadata, setPostMetadata] = useState<any[]>([]);

  useEffect(() => {
    const fetchPostMetadata = async () => {
      try {
        const metadata = await getPostMetadata();
        setPostMetadata(metadata);
      } catch (error) {
        console.error("Error fetching post metadata:", error);
      }
    };

    fetchPostMetadata();
  }, []);

  const postPerPage = 6;

  // Calculate indexes of posts to display on the current page
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = postMetadata.slice(indexOfFirstPost, indexOfLastPost);

  const postPreviews = currentPosts.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };
  const lastPostPage = Math.ceil(postMetadata.length / postPerPage);
  return (
    <div className="setHeight">
      <div className="setContentHeight">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-6 mt-5">
          {postPreviews}
        </div>
      </div>
      <div className="content-center">
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous &nbsp;
        </button>
        <p>
          {currentPage} / {lastPostPage}
        </p>
        <button
          onClick={nextPage}
          disabled={currentPage == lastPostPage}
          className={currentPage == lastPostPage ? "notAllowed" : "text-white"}
        >
          {" "}
          &nbsp;Next
        </button>
      </div>
    </div>
  );
};

export default PostsListingPage;
