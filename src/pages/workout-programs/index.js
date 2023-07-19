import React from 'react'
import Navbar from '../../components/Navbar2'
import Cardcopy from '../../components/Cardcopy'
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


function WorkoutPrograms({ programs }) {

    console.log({programs})
    
    const router = useRouter()
    
const currentPath = router.route
console.log('het huidige gekke padje is: ' + currentPath)

  return (
    <>
    <main>
   <Navbar />
   <div className='text-3xl container'>
   </div>
   <div className='container grid grid-cols-3 gap-4 content-center align-top py-7'>
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

   <div className='container grid grid-cols-3 gap-4 content-center align-top py-7 mx-20'>
    {programs.map((program)=>
    {
        return <div key={program.id}>
          <Cardcopy

            cardTitle={program.fields.programName}
            cardDescription={program.fields.description}
            cardSubheader={'Duration: ' + program.fields.duration + ' weeks'}
            cardImageUrl={program.fields.image.fields.file.url}
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

export default WorkoutPrograms