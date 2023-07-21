import Navbar from '@/components/Navbar2'
import React from 'react'
import { InlineWidget } from 'react-calendly'


function bookACall() {
  return (
    <main>
    < Navbar />
    <div className='m-auto container'>

    <div className="max-h-26 text-center items-center mt-9 my-6">
        <p className="text-2xl mb-5">Gesprek boeken</p>
        <div>
        Hieronder is het mogelijk een afspraak te boeken met een teammember. <br></br>
        Geef uw gewenste tijd en datum aan en u kunt een gesprek plannen met een teammember. <br></br>
        In het gesprek wordt er besproken wat je wensen zijn op fitnessniveau en hoe wij denken u hierbij te kunnen helpen.
        </div>
        </div>

    <div className="container max-h-80 align-middle mt-20">
    <div className="max-w-xl m-auto">
    < InlineWidget 
    url="https://calendly.com/stephen-reidijck"
    />
    </div>  
    </div>

    </div>
    </main>
  )
}

export default bookACall