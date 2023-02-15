import axios from 'axios';
import { Method } from './types';

abstract class Api {
  constructor(
    protected readonly baseUrl: string,
    protected readonly headers: unknown,
  ) {}

  protected async axiosRequest(method: Method, url: string, data?: unknown) {
    return axios({
      method,
      url: `${this.baseUrl}${url}`,
      data,
    });
  }
}

export default Api;
