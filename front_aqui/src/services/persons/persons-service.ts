import { BaseService } from "../../core/base/base-service";
import type { Person, PersonRequest } from "./interfaces/person.interface";

export const PersonsService = {
  retrieve: () => {
    return BaseService.get<Array<Person>>({
      endpoint: "v1/persons",
    });
  },
  personById: (id: number) => {
    return BaseService.get<Person>({
      endpoint: `v1/persons/${id}`,
    });
  },
  save: (req: PersonRequest) => {
    return BaseService.post<Person>({
      endpoint: "v1/persons",
      body: req,
    });
  },
  update: (id: number, req: PersonRequest) => {
    return BaseService.put<Person>({
      endpoint: `v1/persons/${id}`,
      body: req,
    });
  },
  del: (id: number) => {
    return BaseService.del<null>({
      endpoint: `v1/persons/${id}`,
    });
  },
};
