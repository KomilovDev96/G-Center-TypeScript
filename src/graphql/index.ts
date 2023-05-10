import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
} from "@apollo/client";
import { store } from "../store";
import { onError } from "@apollo/client/link/error";
import { UNAUTHENTICATED } from "utils/apolloErrorCodes";
import { signout } from "store/reducer/AuthSlice";

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_BACKEND_URL,
});

const authMiddleware = new ApolloLink((operation: any, forward: any) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: store.getState().auth?.token
        ? `Bearer ${store.getState().auth?.token}`
        : null,
    },
  }));

  return forward(operation);
});

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors && graphQLErrors[0].extensions.code === UNAUTHENTICATED) {
    store.dispatch(signout());
  }
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([authMiddleware, errorLink, httpLink]),
});

export default client;
