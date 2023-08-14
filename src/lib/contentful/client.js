import { createClient } from "contentful";

export const contentfulClient = createClient({
  space: process.env.DB_SPACE_ID,
  accessToken: process.env.DB_ACCESS_TOKEN,
});
