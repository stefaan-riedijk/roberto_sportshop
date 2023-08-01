import { createClient } from 'contentful'

import { Inter } from 'next/font/google'


import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'

import Navbar from '../components/Navbar3.js'

import ReactMarkdown from 'react-markdown'
import workoutphoto from '../assets/images/workout.jpg'
import nutphoto from '../assets/images/nutrition.jpg'



const contentful = require('contentful')
const client = createClient({
  space: process.env.DB_SPACE_ID as string,
  accessToken: process.env.DB_ACCESS_TOKEN as string,
})

export async function getStaticProps() {

  const res = await client.getEntries({content_type:'homePage'})

  return {
    props : {
      homepage: res.items[0].fields
    }
  }
}



const inter = Inter({ subsets: ['latin'] })






export default function Home( props:Object ) {

  console.log('het hele apparaat: ' + JSON.stringify(props,null,4))

  return (
    
    <>
        <Navbar />
        <div className='max-w-4xl mx-auto px-5 text-center py-20 text-blue-700'>

          <div className='container relative mx-auto max-w-xl bg-blue-400 rounded-lg space-x-3'>
              <div className='text-2xl font-semibold justify-center inline-flex place-self-center relative'>
                  <p>R-Force Workout and Nutrition</p>
              </div>
              <div className='font-medium py-5'>
                  <p>Wij bieden mensen de kennis aan om te starten met een gezonde levensstijl en positieve gewoontes vast te houden</p>
              </div>
          </div>

          <div className='relative grid grid-cols-2 space-x-2 mx-auto px-4 py-12'>
                <Link href='/workout-programs'>
                    <Image 
                      className='rounded-lg'
                      src={workoutphoto}
                      width={500}
                      height={500}
                      alt="Workout Photo"
                      />
                </Link>
                <Link href='/nutrition-plans'>
                    <Image
                      className='rounded-lg'
                      src={nutphoto}
                      width={500}
                      height={600}
                      alt="Nutrition Photo"
                      />
                </Link>
          </div>
          <ReactMarkdown>
                  {props.homepage.firstParagraph.content[0].content[0].value}
          </ReactMarkdown>
        </div>
    </>
  )
}
