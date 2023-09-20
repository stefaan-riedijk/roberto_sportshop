import { contentfulClient } from "./client";

export default async function getBlogPosts() {
  const res = await contentfulClient.getEntries({ content_type: "blogPost" });

  const sanitizedRes = res.items.map((item) => {
    const fields = item.fields;
    return fields;
  });
  return { sanitizedRes };
}
