import { gql } from 'apollo-boost';

const getAuthorsQuery = gql`
{
    authors {
        id
        name
    }
}
`

const getBooksQuery = gql`
    {
        books {
            id
            name
            genre
        }
    }
`

const addBookMutation = gql`
    mutation($name: String!, $genre: String!, $authorId: ID!)  {
        addBook(name: $name, genre: $genre, authorId: $authorId) {
            id
            name
        }
    }
`

const getBookQuery = gql`
    query($id: ID) {
        book(id: $id) {
            id
            name
            genre
            author {
                id
                name
                books {
                    id
                    name
                    genre
                }
            }
        }
    }
`

export { getBooksQuery, getAuthorsQuery, addBookMutation, getBookQuery };
