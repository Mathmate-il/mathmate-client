import env from '../../config/env';

export const getAllQuestions = async () => {
  const url = `${env.SERVER_URL}/question/all`;
  const response = await fetch(url);
  const questions = await response.json();
  return questions;
};

export const getAllQuestionsByTags = async () => {
  const url = `${env.SERVER_URL}/question/all/filterBy/tags`; // TODO: not tested yet
  const response = await fetch(url);
  const questions = await response.json();
  return questions;
};

export const getAllQuestionsByOwner = async () => {
  const url = `${env.SERVER_URL}/question/all/filterBy/owner`; // TODO: not tested yet
  const response = await fetch(url);
  const questions = await response.json();
  return questions;
};
