import Api from './Abstract.api';

class MainService extends Api {
  constructor(protected baseUrl: string, protected headers: any) {
    super(baseUrl, headers);
  }

  public async getJwtFromGoogleClientCredentials(googleCredentials: string) {
    try {
      const response = await this.axiosRequest('POST', '/google/getJwt', {
        googleCredentials,
      });
      if (response.status !== 200) {
        return await Promise.reject(response.data);
      }
      return response.data;
    } catch (error) {
      return await Promise.reject(error);
    }
  }

  public async getAllQuestions() {
    try {
      const response = await this.axiosRequest('GET', '/question/all');
      if (response.status !== 200) {
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
