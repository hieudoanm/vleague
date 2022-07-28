import {
  ApolloClient,
  ApolloQueryResult,
  FetchResult,
  InMemoryCache,
  DocumentNode,
} from '@apollo/client';
import get from 'lodash/get';
import { API } from '../configs';

const GRAPHQL_URI: string = process.env.GRAPHQL_URI || `${API}/graphql`;
console.info('GRAPHQL_URI', GRAPHQL_URI);

export const client = new ApolloClient({
  uri: GRAPHQL_URI,
  cache: new InMemoryCache(),
});

export const query = async <T>(
  query: DocumentNode,
  variables: Record<string, any> = {}
): Promise<T> => {
  try {
    const result: ApolloQueryResult<T> = await client.query<T>({
      query,
      variables,
    });
    const data: T = get(result, 'data');
    return data;
  } catch (error) {
    console.error(error);
    return {} as T;
  }
};

export const mutate = async <T>(
  mutation: DocumentNode,
  variables: Record<string, any> = {}
): Promise<T> => {
  try {
    const result: FetchResult<T> = await client.mutate<T>({
      mutation,
      variables,
    });
    const data: T = get(result, 'data');
    return data;
  } catch (error) {
    console.error(error);
    return {} as T;
  }
};

export default client;
