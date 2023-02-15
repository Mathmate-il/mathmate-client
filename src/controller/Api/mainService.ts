import Question from '../../model/entities/Question';
import User from '../../model/entities/User';
import Api from './Abstract.api';
import { Method, StatusCode } from './types';

class MainService extends Api {
  constructor(protected baseUrl: string, protected headers: any) {
    super(baseUrl, headers);
  }

  public async getJwtFromGoogleClientCredentials(googleCredentials: string) {
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
  }

  public async getAllQuestions() {
    try {
      const response = await this.axiosRequest(Method.GET, '/question/all');
      if (response.status !== StatusCode.OK) {
        return await Promise.reject(response.data);
      }
      return response.data;
    } catch (error) {
      return await Promise.reject(error);
    }
  }

  public async createQuestion(question: Question) {
    try {
      const response = await this.axiosRequest(
        Method.POST,
        '/question/create',
        question,
      );
      if (response.status !== StatusCode.OK) {
        return await Promise.reject(response.data);
      }
      return response.data;
    } catch (error) {
      return await Promise.reject(error);
    }
  }

  public async getAllQuestionsByTags() {
    try {
      const response = await this.axiosRequest(
        Method.GET,
        '/question/all/filterBy/tags',
      );
      if (response.status !== StatusCode.OK) {
        return await Promise.reject(response.data);
      }
      return response.data;
    } catch (error) {
      return await Promise.reject(error);
    }
  }

  public async getAllQuestionsByOwner() {
    try {
      const response = await this.axiosRequest(
        Method.GET,
        '/question/all/filterBy/owner',
      );
      if (response.status !== StatusCode.OK) {
        return await Promise.reject(response.data);
      }
      return response.data;
    } catch (error) {
      return await Promise.reject(error);
    }
  }

  public async getAllTags() {
    try {
      const response = await this.axiosRequest(Method.GET, '/tags/all');
      if (response.status !== StatusCode.OK) {
        return await Promise.reject(response.data);
      }
      return response.data;
    } catch (error) {
      return await Promise.reject(error);
    }
  }

  public async createBookmark() {
    try {
      const response = await this.axiosRequest(Method.POST, '/bookmark/create');
      if (response.status !== StatusCode.OK) {
        return await Promise.reject(response.data);
      }
      return response.data;
    } catch (error) {
      return await Promise.reject(error);
    }
  }

  public async findUser(user: User) {
    try {
      const response = await this.axiosRequest(Method.GET, '/users/me', user);
      if (response.status !== StatusCode.OK) {
        return await Promise.reject(response.data);
      }
      return response.data;
    } catch (error) {
      return await Promise.reject(error);
    }
  }

  public async updateUser(user: User) {
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
  }
}

const mainService = new MainService('http://localhost:3000', {});

export default mainService;
