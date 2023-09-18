import Navbar from "../components/Navbar/Navbar3";
import React from "react";
import CardGrid from "../components/CardGrid";
import Cardcopy from "../components/Cardcopy";
import { createClient } from "contentful";

export async function getStaticProps() {
  const contentful = require("contentful");

  const client = createClient({
    space: "iosb0n9nw257",
    accessToken: "m4Kuo8rPmcdKiRVNqZHrV5akmrrRrXqi8BDs0Ri4lF8",
  });

  const res = await client.getEntries({ content_type: "workoutProgram" });

  return {
    props: {
      programs: res.items,
    },
  };
}

function tryOut({ programs }) {
  return (
    <>
      <Navbar />
      <div>
        {programs.map((program) => {
          <div key={program.id}>
            <Cardcopy
              cardTitle={program.fields.programName}
              cardDescription={program.fields.description}
              cardSubheader={"Duration: " + program.fields.duration + " weeks"}
              cardImage={program.fields.image.fields.file.url}
            />
          </div>;
        })}
      </div>
    </>
  );
}

export default tryOut;
