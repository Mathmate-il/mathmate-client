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
    try {
      const response = await this.axiosRequest(Method.GET, '/question/all');
      if (response.status !== StatusCode.OK) {
        return await Promise.reject(response.data);
      }
      return response.data;
    } catch (error) {
      return await Promise.reject(error);
    }
  };

  createQuestion = async (token: string, question: Question) => {
    try {
      const response = await this.axiosRequest(
        Method.POST,
        '/question/create',
        question,
        {
          Authorization: `Bearer ${token}`,
        },
      );

      if (response.status !== StatusCode.OK) {
        return await Promise.reject(response.data);
      }
      return response.data;
    } catch (error) {
      return await Promise.reject(error);
    }
  };

  getAllQuestionsByTags = async (tags: Tag[]) => {
    try {
      const response = await this.axiosRequest(
        Method.GET,
        '/question/all/filterBy/tags',
        tags,
      );

      if (response.status !== StatusCode.OK) {
        return await Promise.reject(response.data);
      }
      return response.data;
    } catch (error) {
      return await Promise.reject(error);
    }
  };

  getAllQuestionsByOwner = async (ownerID: string) => {
    try {
      const response = await this.axiosRequest(
        Method.GET,
        '/question/all/filterBy/owner',
        ownerID,
      );
      if (response.status !== StatusCode.OK) {
        return await Promise.reject(response.data);
      }
      return response.data;
    } catch (error) {
      return await Promise.reject(error);
    }
  };

  getAllTags = async () => {
    try {
      const response = await this.axiosRequest(Method.GET, '/tag/all');
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
      if (response.status !== StatusCode.OK) {
        return await Promise.reject(response.data);
      }
      return response.data;
    } catch (error) {
      return await Promise.reject(error);
    }
  };

  getMe = async (token: string) => {
    try {
      const response = await this.axiosRequest(Method.GET, '/users/me', null, {
        Authorization: `Bearer ${token}`,
      });
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

  login = async (credentials: string) => {
    try {
      const response = await this.axiosRequest(
        Method.POST,
        '/auth/login',
        null,
        {
          Authorization: credentials,
        },
      );
      if (response.status !== StatusCode.CREATED) {
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
