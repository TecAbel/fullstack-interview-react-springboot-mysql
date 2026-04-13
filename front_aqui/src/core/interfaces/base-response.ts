export interface BaseResponseI<T> {
  status: boolean;
  data: T;
  msg: string;
}
