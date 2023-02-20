import env from '../../config/env';
import Question from '../../model/entities/Question';
import Tag from '../../model/entities/Tag';
import User from '../../model/entities/User';
import Api from './Abstract.api';
import { Method, StatusCode } from './types';

class MainService extends Api {
  constructor(protected baseUrl: string, protected headers: any) {
    super(baseUrl, headers);
  }

  getJwtFromGoogleClientCredentials = async (googleCredentials: string) => {
    try {
      const response = await this.axiosRequest(Method.POST, '/google/getJwt', {
        googleCredentials,
      });
      if (response.status !== StatusCode.OK) {
        return await Promise.reject(response.data);
      }
      return response.data;
    } catch (error) {
      return await Promise.reject(error);
    }
  };

  getAllQuestions = async () => {
    const response = await this.axiosRequest(Method.GET, '/question/all');
    return response.data;
  };

  createQuestion = async (question: Question) => {
    const response = await this.axiosRequest(
      Method.POST,
      '/question/create',
      question,
    );

    return response.data;
  };

  getAllQuestionsByTags = async (tags: Tag[]) => {
    const response = await this.axiosRequest(
      Method.GET,
      '/question/all/filterBy/tags',
      tags,
    );

    return response.data;
  };

  getAllQuestionsByOwner = async (ownerID: string) => {
    const response = await this.axiosRequest(
      Method.GET,
      '/question/all/filterBy/owner',
      ownerID,
    );
    return response.data;
  };

  getAllTags = async () => {
    try {
      const response = await this.axiosRequest(Method.GET, '/tags/all');
      if (response.status !== StatusCode.OK) {
        return await Promise.reject(response.data);
      }
      return response.data;
    } catch (error) {
      return await Promise.reject(error);
    }
  };

  createBookmark = async () => {
    try {
      const response = await this.axiosRequest(Method.POST, '/bookmark/create');
      if (response.status !== StatusCode.OK) {
        return await Promise.reject(response.data);
      }
      return response.data;
    } catch (error) {
      return await Promise.reject(error);
    }
  };

  findUser = async (user: User) => {
    try {
      const response = await this.axiosRequest(Method.GET, '/users/me', user);
      if (response.status !== StatusCode.OK) {
        return await Promise.reject(response.data);
      }
      return response.data;
    } catch (error) {
      return await Promise.reject(error);
    }
  };

  updateUser = async (user: User) => {
    try {
      const response = await this.axiosRequest(
        Method.PATCH,
        '/users/me/update',
        user,
      );
      if (response.status !== StatusCode.OK) {
        return await Promise.reject(response.data);
      }
      return response.data;
    } catch (error) {
      return await Promise.reject(error);
    }
  };
}

const mainService = new MainService(env.SERVER_URL, {});

export default mainService;
