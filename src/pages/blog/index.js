import React from "react";
import Navbar from "../../components/Navbar/Navbar3";
import BlogSection from "../../components/Blog/BlogSection";
import getBlogPosts from "../../lib/contentful/getBlogPosts";

export async function getStaticProps() {
  const data = await getBlogPosts();
  return {
    props: {
      data,
    },
  };
}

export default function Blog(props) {
  const posts = props.data.sanitizedRes;

  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <BlogSection posts={posts} />
      </div>
    </>
  );
}
