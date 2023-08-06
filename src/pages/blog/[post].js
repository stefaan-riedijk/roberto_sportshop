import React, {useState, useContext} from 'react'
import { client } from '../../lib/client'
import { RICHTEXT_OPTIONS } from '../../lib/richtextOptions'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Navbar from '../../components/Navbar3'
import BlogHeader from '../../components/BlogHeader'
import Image from 'next/image'



export async function getServerSideProps(context) {

    const response = await client.getEntries({
      content_type:"blogPost",
      limit:1,
      "fields.postSlug": context.params.slug})

    return {
        props : {
            post:response.items[0].fields
        }, 
    }
}


export default function Post(props) {

  const post=props.post
  const author=props.post.postAuthor.fields
  console.log(post)

  return (
    <>
    <Navbar/>
    <main>
      <div className='format lg:format-lg m-auto'>

        <h1 className='main-header'>{post.postTitle}</h1>
        <BlogHeader 
          blogTitle={post.postTitle}
          authorName={author.authorName}
          authorImage={author.authorPhoto.fields.file.url}
          authorTitle={author.authorTitle}
          publishDate={post.publishedAt}
          />
        <div className='m-auto mt-5'>
              <Image
                className='m-auto'
                src={`https:${post.headerImage.fields.file.url}`}
                width={500}
                height={500}
                alt=""
                />
        </div>
        <div className=''>
          {documentToReactComponents(post.mainText,RICHTEXT_OPTIONS)}
        </div>
      </div>
    </main>
    </>
  )
}
