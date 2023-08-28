import React, { useState, useEffect } from "react";
import fetchPrograms from "../lib/contentful/fetchPrograms";
import { CategoryFilter } from "../components/CategoryFilter";
import Card from "../components/NewCard";
import CardGrid from "../components/CardGrid";

function Test() {
  const [programs, setPrograms] = useState([]);
  const [singleTag, setSingleTag] = useState(true);
  const [tags, setTags] = useState([""]);
  const { fetchProgramsByTag } = fetchPrograms();

  useEffect(() => {
    fetchProgramsByTag(tags).then(
      (response) => response && setPrograms(response),
    );
  });

  console.log(programs);
  console.log(tags);
  return (
    <div>
      <div className="m-auto max-w-xl pb-6">
        <CategoryFilter stateChanger={setTags}></CategoryFilter>
      </div>
      <div>
        <CardGrid>
          {programs.map((program) => {
            return (
              <Card
                cardTitle={program.programName}
                cardDescription={program.description}
                cardSubheader={"Duration: " + program.duration + " weeks"}
                cardImageUrl={"https:" + program.image.fields.file.url}
                cardUrl={`/workout-programs/${program.slug}`}
              />
            );
          })}
        </CardGrid>
      </div>
    </div>
  );
}

export default Test;
