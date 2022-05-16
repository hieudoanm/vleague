import { gql } from '@apollo/client';
import { DocumentNode } from 'graphql';

export const GET_USER: DocumentNode = gql`
  query GET_USER($email: String!) {
    user(email: $email) {
      email
      key
    }
  }
`;

export const CREATE_USER: DocumentNode = gql`
  mutation CREATE_USER($email: String!) {
    user(email: $email) {
      email
      key
    }
  }
`;
