import { initTRPC } from '@trpc/server';

export const t = initTRPC.create();

export const appRouter = t.router({
  getUser: t.procedure.query(() => {
    return { id: 1, name: 'Bilbo' };
  }),
});

export type AppRouter = typeof appRouter;
