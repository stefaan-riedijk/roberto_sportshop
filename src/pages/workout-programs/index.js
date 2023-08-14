import React from "react";
import { useRouter } from "next/router";
import { contentfulClient } from "../../lib/contentful/client";
import { CategoryFilter } from "../../components/CategoryFilter";
import { CardGrid } from "../../components/CardGrid";

import Navbar from "../../components/Navbar3";
import NewCard from "../../components/NewCard";

export async function getStaticProps() {
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
  //console.log({programs})
  const router = useRouter();
  const currentPath = router.route;
  //console.log('het huidige gekke padje is: ' + currentPath)

  return (
    <>
      <Navbar />
      <main className="h-full">
        <div className="m-auto max-w-xl pb-6">
          <CategoryFilter></CategoryFilter>
        </div>
        <CardGrid>
          {programs.map((program) => {
            return (
              <div key={program.id}>
                <NewCard
                  cardTitle={program.fields.programName}
                  cardDescription={program.fields.description}
                  cardSubheader={
                    "Duration: " + program.fields.duration + " weeks"
                  }
                  cardImageUrl={"https:" + program.fields.image.fields.file.url}
                  cardUrl={currentPath + "/" + program.fields.slug}
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
