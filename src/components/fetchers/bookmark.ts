import env from '../../config/env';

const controller = '/bookmark/';

export const createBookmark = async () => {
  const url = `${env.SERVER_URL}${controller}create`;
  const response = await fetch(url);
  const questions = await response.json();
  return questions;
};
