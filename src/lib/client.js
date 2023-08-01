import * as contentful from 'contentful'


export const client = contentful.createClient({
    space: process.env.DB_SPACE_ID,
    accessToken: process.env.DB_ACCESS_TOKEN,
})
