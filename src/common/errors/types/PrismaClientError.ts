import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

//alem do que está no PrismaClientKnownRequestError, attribuo um objeto meta (e estou fazendo um override nele)
//
export type PrismaClientError = PrismaClientKnownRequestError & {
  meta?: { target: string };
};