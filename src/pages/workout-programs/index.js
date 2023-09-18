import React, { useState, useEffect } from "react";
// import { useRouter } from "next/router";
import { createClient } from "contentful";
// import { contentfulClient } from "../../lib/contentful/client";
import { CategoryFilter } from "../../components/CategoryFilter";
import { CardGrid } from "../../components/CardGrid";

import Navbar from "../../components/Navbar/Navbar3";
import NewCard from "../../components/NewCard";

export async function getStaticProps() {
  const contentfulClient = createClient({
    space: process.env.DB_SPACE_ID,
    accessToken: process.env.DB_ACCESS_TOKEN,
  });
  const res = await contentfulClient.getEntries({
    content_type: "workoutProgram",
  });
  return {
    props: {
      programs: res.items,
    },
  };
}

function WorkoutProgrammers({ programs }) {
  // console.log(programs);

  var filteredPrograms = programs;
  const [teachingMethod, setTeachingMethod] = useState(true);
  useEffect(() => {
    console.log(teachingMethod);
    const getFilteredPrograms = async () => {
      const contentfulClient = createClient({
        space: process.env.DB_SPACE_ID,
        accessToken: process.env.DB_ACCESS_TOKEN,
      });
      filteredPrograms = await contentfulClient.getEntries({
        content_type: "workoutProgram",
        "metadata.tags.sys.id[all]": ["courseFormatOnline"],
      });
      return {
        filteredPrograms,
      };
    };
    // const filteredPrograms = getFilteredPrograms();
  }, [teachingMethod]);

  console.log("de prgms zijn" + filteredPrograms);
  // const router = useRouter();
  // const currentPath = router.route;

  return (
    <>
      <Navbar />
      <main className="h-full">
        <div className="m-auto max-w-xl pb-6">
          <CategoryFilter
            stateChanger={setTeachingMethod}
            state={teachingMethod}
          ></CategoryFilter>
        </div>
        {teachingMethod === true && <div>jatoch</div>}
        <CardGrid>
          {filteredPrograms.map((program) => {
            return (
              <div key={program.id}>
                <NewCard
                  cardTitle={program.fields.programName}
                  cardDescription={program.fields.description}
                  cardSubheader={
                    "Duration: " + program.fields.duration + " weeks"
                  }
                  cardImageUrl={"https:" + program.fields.image.fields.file.url}
                  cardUrl={`/workout-programs/${program.fields.slug}`}
                />
                <p>{console.log(program.id)}</p>
              </div>
            );
          })}
        </CardGrid>
      </main>
    </>
  );
}

export default WorkoutProgrammers;

// function filterPrograms(programs) {
//   const filteredPrograms = programs.filter((program) => {
//     program.metadata.tags.includes({ sys: { id: "courseFormatOnline" } });
//   });
//   return filteredPrograms;
// }

// async function filterProgramsSDK(tags) {
//   const res = await contentfulClient.getEntries({
//     content_type: "workoutProgram",
//     "metadata.tags.sys.id[in]": { tags },
//   });
//   return res.items;
// }
