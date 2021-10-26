import { object, string, TypeOf } from 'zod';

const params = {
    params: object({
      tid: string(),
    }),
  };

export const getMatchSchema = object({
    ...params,
});

export type RealMatchId = TypeOf<typeof getMatchSchema>;