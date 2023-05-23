import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Cardcopy from '../components/Cardcopy'
import { createClient } from 'contentful'



export async function getStaticProps() {

  const contentful = require('contentful')

  const client = createClient({
    space: "iosb0n9nw257",
    accessToken: "m4Kuo8rPmcdKiRVNqZHrV5akmrrRrXqi8BDs0Ri4lF8",
  })

  const res = await client.getEntries({ content_type: 'workoutProgram' })

  return {
    props : {
      programs: res.items
    }
  }
}

function workout_programs({ programs }) {
    console.log({programs})

  return (
    <>
    <main>
   <Navbar />
   <div className='text-3xl container'>
   </div>
   <div className='container grid grid-cols-3 gap-4 content-center align-top py-7'>
    <div className='mx-4 '>
      <Card></Card>
    </div>
    <div className='mx-4 '>
      <Card></Card>
    </div>
    <div className='mx-4 '>
      <Card></Card>
    </div>
   </div>

   <div className='container grid grid-cols-3 gap-4 content-center align-top py-7 mx-6'>
    {programs.map((program)=>
    <div>
    <Cardcopy cardTitle={program.fields.programName} cardDescription={program.fields.description} programDuration={program.fields.duration} cardImage={program.fields.image.fields.file.url}/>
    </div>
    )}
    </div>
    </main>
    </>
  )
}

export default workout_programs