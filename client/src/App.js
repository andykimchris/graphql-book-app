import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import AddBook from './components/AddBook';
import BookList from './components/BookList';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Testing</h1>
        <BookList />
        <AddBook />
      </div>
    </ApolloProvider>
  )
}

export default App;
