import React from 'react'
import Navbar from '../../components/Navbar2'
import NewCard from '../../components/NewCard'
import { createClient } from 'contentful'
import { useRouter } from 'next/router'



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


function workoutPrograms({ programs }) {

    console.log({programs})

    const router = useRouter()
const currentPath = router.route
console.log('het huidige gekke padje is: ' + currentPath)

  return (
    <>
   <Navbar />


    <main className='absolute mx-3'>

   <div className='text-3xl relative w-full'>

   </div>
   <div className='relative w-full grid grid-cols-3 gap-4 content-center align-top py-7'>
    <div className='mx-4 '>
        Lorem Ipsum Hebban Alla Vologe
    </div>
    <div className='mx-4 '>
        Lorem Ipsum Hebban Alla Vologe
    </div>
    <div className='mx-4 '>
        Lorem Ipsum Hebban Alla Vologe
    </div>
   </div>

   <div className='grid grid-cols-2 md:grid-cols-3 gap-4 items-stretch justify-items-center mx-4 md:mx-10 relative w-full'>
    {programs.map((program)=>
    {
        return <div key={program.id}>
          <NewCard

            cardTitle={program.fields.programName}
            cardDescription={program.fields.description}
            cardSubheader={'Duration: ' + program.fields.duration + ' weeks'}
            cardImageUrl={'https:' + program.fields.image.fields.file.url}
            cardUrl={currentPath + '/' + program.fields.slug} />
          <p>{console.log(program.id)}</p>
        </div>
      }
    )}
    </div>
    </main>
    </>
  )
}

export default workoutPrograms