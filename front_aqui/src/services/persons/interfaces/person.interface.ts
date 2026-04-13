export interface Person {
  id: number;
  name: string;
  lastName: string;
  birthday: Date;
  jobPosition: string;
  salary: number;
}

export interface PersonRequest {
  name: string;
  lastName: string;
  birthday: Date | string;
  jobPosition: string;
  salary: number;
}
