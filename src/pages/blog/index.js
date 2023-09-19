import React from "react";
import Navbar from "../../components/Navbar/Navbar3";
import BlogSection from "./BlogSection";

function Blog() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <BlogSection />
      </div>
    </>
  );
}

export default Blog;
