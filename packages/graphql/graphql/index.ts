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
import {
  resolvers as videosResolvers,
  schemas as videosSchemas,
} from './videos';

const globalsSchemas = gql`
  type Query
`;

export const typeDefs = [
  globalsSchemas,
  fixturesSchemas,
  playersSchemas,
  standingsSchemas,
  teamsSchemas,
  videosSchemas,
];

export const resolvers = merge(
  fixturesResolvers,
  playersResolvers,
  standingsResolvers,
  teamsResolvers,
  videosResolvers
);
