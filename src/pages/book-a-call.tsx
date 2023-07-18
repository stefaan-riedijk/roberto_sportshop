import Navbar from '@/components/Navbar2'
import React from 'react'
import { InlineWidget } from 'react-calendly'


function bookACall() {
  return (
    <>
    < Navbar />
    <div>

    <div className="max-h-26 text-center items-center mt-9 my-6">
        <p className="text-2xl mb-5">Gesprek boeken</p>
        <div>
        Hieronder is het mogelijk een afspraak te boeken met een teammember. <br></br>
        Geef uw gewenste tijd en datum aan en u kunt een gesprek plannen met een teammember. <br></br>
        In het gesprek wordt er besproken wat je wensen zijn op fitnessniveau en hoe wij denken u hierbij te kunnen helpen.
        </div>
        </div>

    <div className="w-full container max-h-80 mx-24 align-middle">
    <div className="items-center inline-flex align-middle max-w-md">
    < InlineWidget 
    url="https://calendly.com/stephen-reidijck"
    />
    </div>  
    </div>

    </div>
    </>
  )
}

export default bookACall