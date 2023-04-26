import * as contentful from 'contentful'

const client = contentful.createClient({
    space: import.meta.env.SPACE_ID,
    accessToken: import.meta.env.ACCESS_TOKEN,
});

export default client;