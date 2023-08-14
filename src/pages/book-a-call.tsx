import Navbar from "@/components/Navbar2";
import React from "react";
import { InlineWidget } from "react-calendly";

function BookACall() {
  return (
    <main>
      <Navbar />

      <div className="container absolute m-auto mt-4 px-7">
        <div className="max-h-26 m-auto max-w-2xl items-center  rounded-lg bg-blue-400 py-4 text-center text-blue-800">
          <p className="mb-5 text-2xl font-medium">Gesprek boeken</p>
          <div className="m-auto max-w-lg font-medium">
            Hieronder is het mogelijk een afspraak te boeken met een teammember.
            Geef uw gewenste tijd en datum aan en u kunt een gesprek plannen met
            een teammember. In het gesprek wordt er besproken wat je wensen zijn
            op fitnessniveau en hoe wij denken u hierbij te kunnen helpen.
          </div>
        </div>

        <div className="container mt-6 max-h-60 align-middle">
          <div className="m-auto max-w-xl">
            <InlineWidget url="https://calendly.com/stephen-reidijck" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default BookACall;
