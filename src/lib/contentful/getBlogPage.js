import { contentfulClient } from "./client";

export async function getBlogPage() {
  const res = await contentfulClient.getEntries({ content_type: "blogPage" });
  const pageContent = res.items[0].fields;
  return pageContent;
}
