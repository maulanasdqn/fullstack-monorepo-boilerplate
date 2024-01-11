/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as trpcExpress from '@trpc/server/adapters/express';
import { appRouter } from '@fmb/server-trpc';

const app = express();

app.use(
  '/api/trpc',
  trpcExpress.createExpressMiddleware({ router: appRouter })
);

const server = app.listen(3000, () => {
  console.log(`Listening at http://localhost:${3000}/api`);
});
server.on('error', console.error);
