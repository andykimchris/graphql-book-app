import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../queries/queries';
import BookDetails from './BookDetails';

const BookList = props => {

    const [selected, setSelection] = useState(null)
    let data = props.data
    const displayBooks = _ => {
        if (data.loading) {
            return <div>Loading....</div>
        } else {
            return data.books.map(book => {
                return (
                    <li key={book.id} onClick={_ => setSelection(book.id)}>{book.name}</li>
                )
            })
        }
    } 

    return(
        <div>
            <ul id="book-list">
                { displayBooks() }
            </ul>
            <BookDetails bookId={selected} />
        </div>
    )
}

export default graphql(getBooksQuery)(BookList)