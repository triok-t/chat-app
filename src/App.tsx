import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { ChatPage } from "./components/chats/pages/ChatPage";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  // if (graphQLErrors) {
  //   graphQLErrors.map(({ message }) => {
  //     alert(`Graphql error ${message}`);
  //   });
  // }
  // if (networkError) {
  //   console.log('Network Error: ', networkError.message)
  // }
});

const link = from([
  errorLink,
  new HttpLink({
    uri: "https://angular-test-backend-yc4c5cvnnq-an.a.run.app/graphql",
  }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ChatPage data-test='chat-component' />
    </ApolloProvider>
  );
}

export default App;
