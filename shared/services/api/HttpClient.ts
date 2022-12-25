import { $Fetch } from 'nitropack';
import {
  ApiRequestPayload,
  ApiMethodRequestPayload,
  HttpMethod,
  IApiService,
  ApiResponse,
} from './types';

export class HttpClient implements IApiService {
  private readonly client: $Fetch;

  constructor(client: $Fetch) {
    this.client = client
  }

  request<T>({
    method,
    url,
    query,
    body,
    options,
  }: ApiRequestPayload): ApiResponse<T> {
    return this.client<T>(url,
      {
        method,
        query,
        body,
        ...options,
      })
  }

  get<T>(payload: ApiMethodRequestPayload) {
    return this.request<T>({
      method: HttpMethod.GET,
      ...payload,
    })
  }
}
