import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageProductionDefault,
} from 'apollo-server-core';
<<<<<<< HEAD
import http from 'http';
import express from 'express';
import app from './app';

const NODE_ENV = process.env.NODE_ENV || 'development';
import { resolvers, typeDefs } from './graphql';
import { ApolloServer } from 'apollo-server-express';
=======
import { ApolloServer } from 'apollo-server-express';
import http from 'http';
import express from 'express';
import { logger } from 'shared';
import app from './app';
import { resolvers, typeDefs } from './graphql';

const NODE_ENV = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || '5000';
>>>>>>> 6c83596 (Update dependency @solana/web3.js to v1.45.0 (#43))

const httpServer = http.createServer(app);

const startApolloServer = async (
  app: express.Application,
  httpServer: http.Server
) => {
  const playgroundPlugin =
    NODE_ENV === 'development'
      ? ApolloServerPluginLandingPageGraphQLPlayground()
      : ApolloServerPluginLandingPageProductionDefault();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    plugins: [
      playgroundPlugin,
      ApolloServerPluginDrainHttpServer({ httpServer }),
    ],
  });

  await server.start();
  server.applyMiddleware({ app });

  if (NODE_ENV === 'development') {
    app.listen(PORT, () => {
      logger.info(`GraphQL is listening on port ${PORT}`);
    });
  }
};

startApolloServer(app, httpServer);

export default httpServer;
