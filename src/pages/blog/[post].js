// hooks
import React, { useState, useEffect, useRef } from "react";
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
  // JSON object with the comments for the post
  const [comments, setComments] = useState(props.comments);
  // string var for the new comment from input box
  const [commentBody, setCommentBody] = useState("");
  // boolean to submit comment on click
  const [submit, setSubmit] = useState(false);
  // boolean to update the comment list
  const [updateList, setUpdateList] = useState(false);
  // boolean to delete comment on click
  const [deleteComm, setDeleteComm] = useState(false);
  // string var with the commentID to be deleted in the useEffect Call
  const [deleteId, setDeleteId] = useState(0);

  ////
  const inputRef = useRef(null);

  // console logs
  //console.log(props);
  // console.log(comments);
  //console.log(inputRef);
  //console.log(comments);
  console.log(deleteId);

  // sanitize props data
  const post = props.post;
  const author = props.post.postAuthor.fields;

  // initialize session hook
  const { data: session } = useSession();

  // run use effect if comment is submitted or deleted
  useEffect(() => {
    console.log("rabbit");

    // function to be called on clicking submit button
    const handleSubmit = async (text) => {
      const body = text;
      const postId = props.post.postSlug;
      const authorEmail = session.user?.email;
      const response = await axios
        .post("/api/comments", {
          body,
          postId,
          authorEmail,
        })
        .then(() => {
          setUpdateList(true);
        });
    };

    // update comment list function
    const updateListFunc = async () => {
      const slug = props.post.postSlug;
      const response = await axios.get("/api/comments", {
        slug,
      });
      setUpdateList(false);
      setComments(response.data.comments);
      console.log(response.status);
      //console.log(response.data);
    };
    // delete comment
    const handleDelete = async (deleteId) => {
      const response = await axios
        .delete(`/api/comments?id=${deleteId}`)
        .then((response) => {
          setUpdateList(true);
          console.log(response);
        })
        .catch((err) => console.log(err));
    };
    // execute handleSubmit if submit is true
    if (submit) {
      if (session) {
        try {
          handleSubmit(inputRef.current.value);
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
    if (deleteComm) {
      try {
        handleDelete(deleteId);
      } catch (err) {
        console.log(err);
      }
      setDeleteComm(false);
    }
  }, [submit, updateList, deleteComm, deleteId]);

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
          <CommentSection
            comments={comments}
            bodyChanger={setCommentBody}
            submitChanger={setSubmit}
            inputState={commentBody}
            ref={inputRef}
            session={session}
            setDeleteId={setDeleteId}
            setDeleteComm={setDeleteComm}
          />
          <BackToTopButton />
        </div>
      </main>
    </>
  );
}
