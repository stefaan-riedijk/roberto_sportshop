import React from 'react'
import Image from 'next/image'

function NewCard( props ) {
  return (
        <div class="max-w-sm h-full bg-sky-500 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative top-0">

            <div className='w-auto h-32 md:h-40 lg:h-44 relative flex-1'>
                    <a href={props.cardUrl}>
                        <div className='overflow-hidden'>
                        <Image className="rounded-t-lg object-cover" src={props.cardImageUrl} alt="" fill={true}/>
                        </div>
                    </a>
            </div>

            <div class="md:p-5 mx:10 md:mx-7 flex-1 h-24 md:h-40 lg:h-52">
                    <a href={props.cardUrl}>
                        <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white block">{props.cardTitle}</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 hidden lg:block">{props.cardDescription}</p>
            </div>

            <a href={props.cardUrl} class="items-center absolute hidden md:block bottom-3 mt-7 ml-3 px-3 py-2 text-sm font-medium text-center 
             text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
            </a>
            
        </div>
  )
}

export default NewCard
