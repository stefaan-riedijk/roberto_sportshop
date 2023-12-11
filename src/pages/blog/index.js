import React from "react";
import Navbar from "../../components/Navbar/Navbar3";
import BlogSection from "../../components/Blog/BlogSection";
import getBlogPosts from "../../lib/contentful/getBlogPosts";
import { getBlogPage } from "../../lib/contentful/getBlogPage";

export async function getStaticProps() {
  const posts = await getBlogPosts();
  const pageContent = await getBlogPage();

  return {
    props: {
      posts,
      pageContent,
    },
  };
}

export default function Blog({ posts, pageContent }) {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <BlogSection pageContent={pageContent} posts={posts} />
      </div>
    </>
  );
}
