import React from "react";
import Image from "next/image";

function BlogHeader(props) {
  return (
    <header className="not-format mb-4 lg:mb-6">
      <address className="mb-6 flex items-center not-italic">
        <div className="mr-3 inline-flex items-center text-sm text-gray-900 dark:text-white">
          <div className="relative my-auto mr-4 h-16 w-16 overflow-hidden">
            <Image
              className="rounded-full object-cover"
              fill={true}
              src={props.authorImage}
              alt={props.authorName}
              priority={true}
            />
          </div>
          <div>
            <a
              href="#"
              rel="author"
              className="text-xl font-bold text-gray-900 dark:text-white"
            >
              {props.authorName}
            </a>
            <p className="text-base font-normal text-gray-900 dark:text-gray-400">
              {props.authorTitle}
            </p>
            <p className="text-base font-normal text-gray-900 dark:text-gray-400">
              <time pubdate>{props.publishDate}</time>
            </p>
          </div>
        </div>
      </address>
      <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 dark:text-white lg:mb-6 lg:text-4xl">
        {props.blogTitle}
      </h1>
    </header>
  );
}

export default BlogHeader;
