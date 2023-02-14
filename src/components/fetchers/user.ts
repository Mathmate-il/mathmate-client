import env from '../../config/env';

const controller = '/user/';

export const getMe = async () => {
  const url = `${env.SERVER_URL}${controller}me`;
  const response = await fetch(url);
  const questions = await response.json();
  return questions;
};

export const updateMe = async () => {
  const url = `${env.SERVER_URL}${controller}me/update`;
  const response = await fetch(url);
  const questions = await response.json();
  return questions;
};
