import { fillTemplate } from './render-mini-photo.js';

const Url = {
  GET: 'https://27.javascript.pages.academy/kekstagram/data',
  POST: 'https://27.javascript.pages.academy/kekstagram'
};


const getDataServer = async (onSuccess) => {
  try {
    const resolve = await fetch(Url.GET);
    const data = await resolve.json();
    const posts = await data;
    await onSuccess(posts);
    return posts;
  }
  catch (err) {
    return `${err.message}`;
  }
};

const dataServer = await getDataServer(fillTemplate);

export { dataServer };

