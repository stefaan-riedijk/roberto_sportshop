import React from 'react'
import Navbar from '../components/Navbar3'

import {client} from '../lib/client'
import {RICHTEXT_OPTIONS} from '../lib/richtextOptions'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'



export async function getStaticProps() {

  const res = await client.getEntries({content_type:'homePage'})

  return {
    props : {
      homepage: res.items[0].fields
    }
  }
}


function Test( props) {
  console.log(JSON.stringify(props.homepage, null, 4))
  return (
    <>
    <Navbar>

    </Navbar>
    <main>
      <div className='max-w-2xl m-auto'>
         {documentToReactComponents(props.homepage.firstParagraph, RICHTEXT_OPTIONS)}
      </div>
      <div className='max-w-2xl m-auto'>
        {documentToReactComponents(props.homepage.welcomeText, RICHTEXT_OPTIONS)}
      </div>
    </main>
    </>
  )
}

export default Test