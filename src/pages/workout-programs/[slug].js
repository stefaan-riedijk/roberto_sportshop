import React from 'react'
import * as contentful from 'contentful'
import Navbar from '../../components/Navbar'
import Image from 'next/image'

var client = contentful.createClient({
  space: "iosb0n9nw257",
  accessToken: "m4Kuo8rPmcdKiRVNqZHrV5akmrrRrXqi8BDs0Ri4lF8",
});

export async function getServerSideProps( context ) {
  console.log ('context: ', context.params)
  
  // get data from a headless CMS
  const res = await client.getEntries ({
    content_type: 'workoutProgram',
    limit: 1,
    "fields.programName": context.params.slug
  })

  console.log ('de programmas zijn: ', res)

  return {
    props: {
      program: res.items
    },
  }
}

export default function ProgramPage( props ) {
  const program = props.program[0].fields
  const str = JSON.stringify(program, null, 4)
  console.log('Nieuwe objectg uit por = ' + str)
  //const str = JSON.stringify(props.program[0], null, 4)
  //console.log('Naam van de nieuwe nieuwe programma is' + str)
  //const naam_str =JSON.stringify(program, null, 4)
  //console.log('Nieuwe ultranieuwe namm is gelijk aan: ' + naam_str)

  
  return (
    <>
      <Navbar />
      <div>{program.image.fields.file.url}</div>
      <div>
        <Image 
        src={'https:' + program.image.fields.file.url}
        width={500}
        height={500}
        alt="Workout Program Image"
        />
        <h1>{program.programName}</h1>
        <h1>{program.description}</h1>
      </div>
    </>
  )
}