import * as contentful from "contentful";

const getTeamMembers = () => {
  const client = contentful.createClient({
    accessToken: process.env.NEXT_PUBLIC_CONTDB_TOKEN,
    space: process.env.NEXT_PUBLIC_CONTDB_SPACEID,
  });

  const fetchTeamMembers = async () => {
    try {
      const res = await client.getEntries({
        content_type: "author",
      });

      const sanitizedEntries = res.items.map((item) => {
        const photo = item.fields.authorPhoto.fields;
        return {
          ...item.fields,
          photo,
        };
      });

      return sanitizedEntries;
    } catch {
      console.log(`Error fetching authors ${error}`);
    }
  };

  const aboutPage = async () => {
    try {
      const resp = await client.getEntries({
        content_type: "aboutPage",
      });
      const sanitizedContent = resp.items.map((item) => {
        return {
          ...item.fields,
        };
      });
      return sanitizedContent;
    } catch {
      console.log(`Error fetching authors ${error}`);
    }
  };

  return { fetchTeamMembers, aboutPage };
};

export default getTeamMembers;
