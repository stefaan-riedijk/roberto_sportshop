import { contentfulClient } from "./client";

export async function getAboutPage() {
  const teamRes = await contentfulClient.getEntries({
    content_type: "author",
  });
  const aboutRes = await contentfulClient.getEntries({
    content_type: "aboutPage",
  });
  const Team = teamRes.items.map((item) => {
    const photo = item.fields.authorPhoto.fields;
    return {
      ...item.fields,
      photo,
    };
  });
  return {
    data: {
      team: Team,
      aboutContent: aboutRes.items[0].fields,
    },
  };
}
