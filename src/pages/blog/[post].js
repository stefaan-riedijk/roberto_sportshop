// hooks
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

// cdn imports + prisma imports
import { contentfulClient } from "../../lib/contentful/client";
import { RICHTEXT_OPTIONS } from "../../lib/contentful/richtextOptions";
import axios from "axios";
import { prisma } from "../../server/db/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

// UI components
import CommentSection from "../../components/Blog/CommentSection";
import Navbar from "../../components/Navbar/Navbar3";
import BlogHeader from "../../components/Blog/BlogHeader";
import Image from "next/image";
import BackToTopButton from "../../components/BackToTopButton";

export async function getServerSideProps(context) {
  // fetch contentful post data
  const slug = context.params.slug;
  const response = await contentfulClient.getEntries({
    content_type: "blogPost",
    limit: 1,
    "fields.postSlug": slug,
  });

  // fetch comment from Prisma
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
  // state variables, submit:boolean, commentbody: string (from input dom element), comments: object state variable
  const [commentBody, setCommentBody] = useState("");
  const [submit, setSubmit] = useState(false);
  const [updateList, setUpdateList] = useState(false);
  const [comments, setComments] = useState(props.comments);

  // console logs
  //console.log(props);
  //console.log(commentBody);
  //console.log(comments);

  // sanitize props data
  const post = props.post;
  const author = props.post.postAuthor.fields;

  // initialize session hook
  const { data: session } = useSession();

  // run use effect if comment is submitted or deleted
  useEffect(() => {
    // function to be called on clicking submit button
    const handleSubmit = async (text) => {
      // const from input dom element
      const body = text;
      // slug from content cdn
      const postId = props.post.postSlug;
      // user email from session hook
      const authorEmail = session.user?.email;
      // make post api request
      const response = await axios
        .post("/api/comments", {
          body,
          postId,
          authorEmail,
        })
        .then(setUpdateList(true));
      console.log(response.status);
      console.log(response.data);
      // get updated list of comments from prisma and update state variable
    };
    const updateListFunc = async () => {
      const slug = props.post.postSlug;
      const response = await axios
        .get("/api/comments", {
          slug,
        })
        .then(setUpdateList(false));
      setComments(response.data.comments);
      console.log(response.status);
      //console.log(response.data);
    };
    // execute handleSubmit if submit is true
    if (submit) {
      if (session) {
        try {
          handleSubmit(commentBody);
        } catch (err) {
          console.log(err);
        }
        setSubmit(false);
      } else {
        console.log("geen session");
      }
    }
    // execute updateListFunc if handleSubmit is successfull
    if (updateList) {
      try {
        updateListFunc();
      } catch (err) {
        console.log(err);
      }
    }
    // only run useEffect if submit is changed
  }, [submit, updateList]);

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
              setSubmit(true);
            }}
          ></button>
          <CommentSection comments={comments} />
          <BackToTopButton />
        </div>
      </main>
    </>
  );
}
