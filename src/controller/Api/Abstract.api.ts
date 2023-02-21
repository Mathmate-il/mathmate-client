import axios, { AxiosRequestConfig } from 'axios';
import { Method } from './types';

abstract class Api {
  constructor(
    protected readonly baseUrl: string,
    protected readonly headers: unknown,
  ) {}

  protected async axiosRequest(
    method: Method,
    url: string,
    data?: unknown,
    headers?: any,
  ) {
    const fullUrl = `${this.baseUrl}${url}`;

    return axios({
      method,
      url: fullUrl,
      headers,
      data,
    } as AxiosRequestConfig);
  }
}

export default Api;
