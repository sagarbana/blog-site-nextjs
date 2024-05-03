import Pagination from "@/components/pagination/pagination";
import PostsListingPage from "@/posts/posts";

const HomePage = () => {
  /* const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div className="grid grid-cols-2 md:grid-cols-2 gap-6 mt-5">{postPreviews}</div>
  ); */
  
  return (
    <>
      <PostsListingPage />
    </>
  );
  // return PostsListingPage();
};

export default HomePage;
