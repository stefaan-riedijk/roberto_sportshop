import React from 'react'
import Image from 'next/image'

function BlogHeader(props) {


  return (
    <header className="mb-4 lg:mb-6 not-format">
              <address className="flex items-center mb-6 not-italic">
                  <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                        <div className='w-16 h-16 relative mr-4 my-auto overflow-hidden'>
                            <Image 
                                className="rounded-full object-cover" 
                                fill={true}
                                src={`https:${props.authorImage}`} 
                                alt={props.authorName}
                                />
                        </div>
                      <div>
                          <a href="#" rel="author" className="text-xl font-bold text-gray-900 dark:text-white">{props.authorName}</a>
                          <p className="text-base font-normal text-gray-900 dark:text-gray-400">{props.authorTitle}</p>
                          <p className="text-base font-normal text-gray-900 dark:text-gray-400"><time pubdate>{props.publishDate}</time></p>
                      </div>
                  </div>
              </address>
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">{props.blogTitle}</h1>
    </header>
  )
}

export default BlogHeader