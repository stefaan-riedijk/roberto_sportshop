import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// const imageStyle = {
//   overflow:
// }

function Cardcopy( props ) {



  return (
    <div
  className="rounded-lg bg-blue-500 container h-auto  sm:w-28 md:w-40 lg:w-60">


    <div className='relative overflow-hidden bg-red-500 rounded-lg w-40 max-h-20'>

    <Image
      className="object-cover"
      src= {'https:' + props.cardImageUrl}
      alt="Picture of the program"
      fill={true}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      </div>

  <div class="p-6 min-w-200">
    <h5
      class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        {props.cardTitle}
    </h5>
    <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200 hidden md:visible">
        {props.cardDescription}
    </p>
    <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
        {props.cardSubheader}
    </p>
    <button
      type="button"
      class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-bold leading-normal text-white bg-blue-400 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
      data-te-ripple-init
      data-te-ripple-color="light">
      <a href={props.cardUrl}>See More</a>
    </button>
  </div>
</div>
  )
}

export default Cardcopy