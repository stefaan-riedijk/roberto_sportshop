import Navbar from '@/components/Navbar2'
import React from 'react'
import { InlineWidget } from 'react-calendly'


function BookACall() {
  return (
      <main>

          < Navbar />

          <div className='m-auto container px-7 mt-4 absolute'>
              <div className="max-h-26 text-center items-center m-auto  bg-blue-400 rounded-lg max-w-2xl py-4 text-blue-800">
                    <p className="text-2xl mb-5 font-medium">Gesprek boeken</p>
                    <div className='max-w-lg m-auto font-medium'>
                    Hieronder is het mogelijk een afspraak te boeken met een teammember. 
                    Geef uw gewenste tijd en datum aan en u kunt een gesprek plannen met een teammember. 
                    In het gesprek wordt er besproken wat je wensen zijn op fitnessniveau en hoe wij denken u hierbij te kunnen helpen.
                    </div>
              </div>

              <div className="container max-h-60 align-middle mt-6">
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

export default BookACall