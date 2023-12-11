import React from "react";

import Image from "next/image";
import Link from "next/link";

function Cardcopy(props) {
  return (
    <div className="container h-auto rounded-lg bg-blue-500  sm:w-28 md:w-40 lg:w-60">
      <div className="relative max-h-20 w-40 overflow-hidden rounded-lg bg-red-500">
        <Image
          className="object-cover"
          src={"https:" + props.cardImageUrl}
          alt="Picture of the program"
          fill={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div class="min-w-200 p-6">
        <h5 class="text-neutral-800 dark:text-neutral-50 mb-2 text-xl font-medium leading-tight">
          {props.cardTitle}
        </h5>
        <p class="text-neutral-600 dark:text-neutral-200 mb-4 hidden text-base md:visible">
          {props.cardDescription}
        </p>
        <p class="text-neutral-600 dark:text-neutral-200 mb-4 text-base">
          {props.cardSubheader}
        </p>
        <button
          type="button"
          className=" inline-block rounded bg-blue-400 px-6 pb-2 pt-2.5 text-xs font-bold leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <a href={props.cardUrl}>See More</a>
        </button>
      </div>
    </div>
  );
}

export default Cardcopy;
