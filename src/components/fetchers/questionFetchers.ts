import env from '../../config/env';

const controller = '/question/';

export const createQuestion = async () => {
  const url = `${env.SERVER_URL}${controller}/create`; // TODO: not tested yet
  const response = await fetch(url);
  const questions = await response.json();
  return questions;
};

export const getAllQuestions = async () => {
  const url = `${env.SERVER_URL}${controller}all`;
  const response = await fetch(url);
  const questions = await response.json();
  return questions;
};

export const getAllQuestionsByTags = async () => {
  const url = `${env.SERVER_URL}${controller}all/filterBy/tags`; // TODO: not tested yet
  const response = await fetch(url);
  const questions = await response.json();
  return questions;
};

export const getAllQuestionsByOwner = async () => {
  const url = `${env.SERVER_URL}${controller}all/filterBy/owner`; // TODO: not tested yet
  const response = await fetch(url);
  const questions = await response.json();
  return questions;
};
