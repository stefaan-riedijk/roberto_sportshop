import * as contentful from "contentful";

const fetchPrograms = () => {
  const client = contentful.createClient({
    accessToken: process.env.NEXT_PUBLIC_CONTDB_TOKEN,
    space: process.env.NEXT_PUBLIC_CONTDB_SPACEID,
  });

  const fetchProgramsByTag = async (tags) => {
    try {
      const entries = await client.getEntries({
        content_type: "workoutProgram",
        select: "fields",
        "metadata.tags.sys.id[in]": tags,
      });

      const sanitizedEntries = entries.items.map((item) => {
        return {
          ...item.fields,
        };
      });

      return sanitizedEntries;
    } catch (error) {
      console.log(`Error fetching authors ${error}`);
    }
  };

  return { fetchProgramsByTag };
};

export default fetchPrograms;
