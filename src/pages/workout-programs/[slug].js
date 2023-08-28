import React from "react";
import { contentfulClient } from "../../lib/contentful/client";

import Navbar from "../../components/Navbar3";
import Image from "next/image";
import Link from "next/link";

export async function getServerSideProps(context) {
  console.log(context);

  const res = await contentfulClient.getEntries({
    content_type: "workoutProgram",
    limit: 1,
    "fields.slug": context.params.slug,
  });

  return {
    props: {
      data: res.items,
    },
  };
}

export default function ProgramPage(props) {
  const program = props.data[0].fields;

  return (
    <>
      <Navbar />
      <main>
        <div className="container mx-auto w-screen px-6 lg:max-w-2xl">
          <div className="relative mx-6 mt-8 h-36 max-w-lg justify-center md:mx-auto lg:mt-16 lg:h-52 lg:max-w-2xl">
            <Image
              className="rounded-lg object-cover shadow-lg"
              src={"https:" + program.image.fields.file.url}
              fill={true}
              alt="Workout Program Image"
            />
          </div>
          <div className=" mx-5 mt-5 justify-center py-3 text-center">
            <h1 className="text text-3xl font-medium">{program.programName}</h1>
            <h1 className="text-2xl font-normal">{program.description}</h1>
            <h1 className="text-xl font-normal">
              {"Duration: " + program.duration + " weeks"}
            </h1>
          </div>
          <div className=" divide-sky-700 border-sky-700 mx-auto mt-8 max-w-2xl divide-y-2 rounded-lg border-4 py-3 text-center">
            {program.exercises.content.map((exercise) => {
              return <div key={exercise.id}>{exercise.content[0].value}</div>;
            })}
          </div>
          <div className="mt-8">
            <Link href="/book-a-call">
              <button
                type="button"
                className="rounded-lg bg-blue-700 px-6 py-3.5 text-center text-base font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Get more info
              </button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
