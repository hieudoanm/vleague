import { gql } from 'apollo-server-express';
import merge from 'lodash/merge';
import {
  resolvers as fixturesResolvers,
  schemas as fixturesSchemas,
} from './fixtures';
import {
  resolvers as playersResolvers,
  schemas as playersSchemas,
} from './players';
import {
  resolvers as standingsResolvers,
  schemas as standingsSchemas,
} from './standings';
import { resolvers as teamsResolvers, schemas as teamsSchemas } from './teams';
import { resolvers as usersResolvers, schemas as usersSchemas } from './users';
import {
  resolvers as videosResolvers,
  schemas as videosSchemas,
} from './videos';

const globalsSchemas = gql`
  type Query
  type Mutation
`;

export const typeDefs = [
  globalsSchemas,
  fixturesSchemas,
  playersSchemas,
  standingsSchemas,
  teamsSchemas,
  usersSchemas,
  videosSchemas,
];

export const resolvers = merge(
  fixturesResolvers,
  playersResolvers,
  standingsResolvers,
  teamsResolvers,
  usersResolvers,
  videosResolvers
);
