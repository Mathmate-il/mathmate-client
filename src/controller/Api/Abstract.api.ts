import axios from 'axios';

abstract class Api {
  constructor(
    protected readonly baseUrl: string,
    protected readonly headers: unknown,
  ) {}

  protected async axiosRequest(method: string, url: string, data?: unknown) {
    return axios({
      method,
      url: `${this.baseUrl}${url}`,
      data,
    });
  }
}

export default Api;
