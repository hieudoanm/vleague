import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageProductionDefault,
} from 'apollo-server-core';
import http from 'http';
import express from 'express';
import app from './app';

const NODE_ENV = process.env.NODE_ENV || 'development';
import { resolvers, typeDefs } from './graphql';
import { ApolloServer } from 'apollo-server-express';

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
};

startApolloServer(app, httpServer);

export default httpServer;
