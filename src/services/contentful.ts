import * as contentful from 'contentful'

const client = contentful.createClient({
    space: import.meta.env.VITE_SPACE_KEY,
    accessToken: import.meta.env.VITE_TOKEN,
});

export default client;