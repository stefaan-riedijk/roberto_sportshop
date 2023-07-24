import React from 'react'
import { createClient } from 'contentful'

import Navbar from '../../components/Navbar2'
import Image from 'next/image'
import Link from 'next/link'



export async function getStaticProps( context ) {
  
      const contentful = require('contentful')
      const client = contentful.createClient({
      
          space: process.env.DB_SPACE_ID,
          accessToken: process.env.DB_ACCESS_TOKEN ,
      });
      console.log ('context: ', context.params)


      // get data from a headless CMS
      const res = await client.getEntries ({
        content_type: 'nutritionPlan',
        limit: 1,
        "fields.slug": context.params.slug
      })
      
      console.log ('de nutrition plans zijn: ', res)

      return {
        props: {
          plan: res.items
        },
      }
}

export default function NutritionPage( props ) {

      const plan = props.plan[0].fields


      const str = JSON.stringify(plan, null, 4)
      console.log('Nieuwe objectg uit por = ' + str)
      //const str = JSON.stringify(props.program[0], null, 4)
      //console.log('Naam van de nieuwe nieuwe programma is' + str)
      //const naam_str =JSON.stringify(program, null, 4)
      //console.log('Nieuwe ultranieuwe namm is gelijk aan: ' + naam_str)

  
      return (
        <main>

          <Navbar />

          <div className='container w-screen px-6 mx-auto lg:max-w-2xl'>
                  <div className='mt-8 lg:mt-16 mx-6 md:mx-auto relative h-36 lg:h-52 justify-center max-w-lg lg:max-w-2xl'>
                        <Image 
                            className='rounded-lg shadow-lg object-cover'
                            src={'https:' + plan.planPhoto.fields.file.url}
                            fill={true}
                            alt="Workout Program Image"
                        />
                  </div>
                  <div className=' mt-5 mx-5 py-3 justify-center text-center'>
                      <h1 className='text-3xl text font-medium'>{plan.planTitle}</h1>
                      <h1 className='text-2xl font-normal'>{plan.description}</h1>
                      <h1 className='text-xl font-normal'>{'Doelgroep: ' + plan.targetAudience}</h1>
                  </div>
                  <div className='mt-8 py-4'>
                      <Link href='/book-a-call'>
                            <button type="button" class="px-6 py-3.5 text-base font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get more info</button>
                      </Link>
                  </div>
          </div>

        </main>
      )
}