import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { contentfulClient } from "../../lib/contentful/client";
import { RICHTEXT_OPTIONS } from "../../lib/contentful/richtextOptions";
import axios from "axios";
import { prisma } from "../../server/db/client";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import CommentSection from "../../components/Blog/CommentSection";
import Navbar from "../../components/Navbar/Navbar3";
import BlogHeader from "../../components/Blog/BlogHeader";
import Image from "next/image";
import BackToTopButton from "../../components/BackToTopButton";

export async function getServerSideProps(context) {
  const slug = context.params.slug;
  const response = await contentfulClient.getEntries({
    content_type: "blogPost",
    limit: 1,
    "fields.postSlug": slug,
  });
  const prismaData = await prisma.comment.findMany({
    where: {
      postId: slug,
    },
    include: {
      author: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  const comments = JSON.parse(JSON.stringify(prismaData));
  return {
    props: {
      post: response.items[0].fields,
      comments: comments,
    },
  };
}

export default function Postpage(props) {
  console.log(props);
  const [commentBody, setCommentBody] = useState("");
  const [submit, setSubmit] = useState(0);
  const post = props.post;
  const author = props.post.postAuthor.fields;

  const { data: session } = useSession();

  useEffect(() => {
    const handleSubmit = async (text) => {
      const body = text;
      const postId = props.post.postSlug;
      const authorEmail = session.user?.email;
      await axios.post("/api/comments", {
        body,
        postId,
        authorEmail,
      });
    };
    session ? handleSubmit(commentBody) : console.log("geen coup");
  }, [submit]);

  console.log(commentBody);
  return (
    <>
      <Navbar />
      <main>
        <div className="format m-auto lg:format-lg">
          <h1 className="main-header">{post.postTitle}</h1>
          <BlogHeader
            blogTitle={post.postTitle}
            authorName={author.authorName}
            authorImage={`https:${author.authorPhoto.fields.file.url}`}
            authorTitle={author.authorTitle}
            publishDate={post.publishedAt}
          />
          <div className="m-auto mt-5">
            <Image
              className="m-auto"
              src={`https:${post.headerImage.fields.file.url}`}
              width={500}
              height={500}
              alt=""
            />
          </div>
          <div className="">
            {documentToReactComponents(post.mainText, RICHTEXT_OPTIONS)}
          </div>
          <input
            onChange={(e) => {
              setCommentBody(e.target.value);
            }}
          ></input>
          <button
            className=" h-10 w-10 rounded-lg bg-yellow-500"
            onClick={() => {
              setSubmit(!submit);
            }}
          ></button>
          <CommentSection comments={props.comments} />
          <BackToTopButton />
        </div>
      </main>
    </>
  );
}
