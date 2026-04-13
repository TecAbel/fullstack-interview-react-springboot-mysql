import api from "../axios/axiosConfig";
import type { BaseResponseI } from "../interfaces/base-response";

interface BaseServiceParams {
  endpoint: string;
  queryParams?: Record<string, string>;
  headers?: Record<string, string>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: any;
}
export const BaseService = {
  get: async <T>({
    endpoint,
    headers,
    queryParams,
  }: BaseServiceParams): Promise<BaseResponseI<T> | null> => {
    return api
      .get<BaseResponseI<T>>(endpoint, {
        headers,
        params: queryParams,
      })
      .then((r) => r.data)
      .catch(() => null);
  },
  post: async <T>({
    endpoint,
    body,
    headers,
  }: BaseServiceParams): Promise<BaseResponseI<T> | null> => {
    return api
      .post<BaseResponseI<T>>(endpoint, body, {
        headers,
      })
      .then((r) => r.data)
      .catch(() => null);
  },
  put: async <T>({
    endpoint,
    body,
    headers,
  }: BaseServiceParams): Promise<BaseResponseI<T> | null> => {
    return api
      .put<BaseResponseI<T>>(endpoint, body, {
        headers,
      })
      .then((r) => r.data)
      .catch(() => null);
  },
  del: async <T>({
    endpoint,
    headers,
  }: BaseServiceParams): Promise<BaseResponseI<T> | null> => {
    return api
      .delete<BaseResponseI<T>>(endpoint, {
        headers,
      })
      .then((r) => r.data)
      .catch(() => null);
  },
};
