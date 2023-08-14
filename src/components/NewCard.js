import React from "react";
import Image from "next/image";

function NewCard(props) {
  return (
    <div class="relative h-full w-full rounded-xl border-8 border-amber-400 bg-light-green-500 opacity-80 shadow dark:border-gray-700 dark:bg-gray-800">
      <div className="relative top-0 h-32 w-full flex-1 overflow-hidden md:h-40 lg:h-44">
        <a href={props.cardUrl}>
          <Image
            className="rounded-t-lg object-contain"
            src={props.cardImageUrl}
            alt=""
            fill={true}
          />
        </a>
      </div>

      <div class="mx:10 h-24 flex-1 md:mx-7 md:h-40 md:p-5 lg:h-52">
        <a href={props.cardUrl}>
          <h5 class="mb-2 block text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.cardTitle}
          </h5>
        </a>
        <p class="mb-3 hidden font-normal text-gray-700 dark:text-gray-400 lg:block">
          {props.cardDescription}
        </p>
      </div>

      <a
        href={props.cardUrl}
        class="absolute bottom-3 ml-3 mt-7 hidden items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm 
             font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:block"
      >
        Read more
        <svg
          class="ml-2 h-3.5 w-3.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
    </div>
  );
}

export default NewCard;
