import { flowRight as compose } from 'lodash'
import React, { useState } from 'react'
import { graphql } from 'react-apollo'
import { addBookMutation, getAuthorsQuery, getBooksQuery } from '../queries/queries'

const AddBook = props => {

    const [name, setName] = useState('')
    const [genre, setGenre] = useState('')
    const [authorId, setAuthorId] = useState('')

    let data = props.getAuthorsQuery
    const displayAuthors = _ => {
        if (data.loading) {
            return <option>Loading authors....</option>
        } else {
            return data.authors.map(author => {
                return (
                    <option key={author.id} value={author.id}>{author.name}</option>
                )
            })
        }
    } 

    const handleSubmit = e => {
        e.preventDefault()
        props.addBookMutation({
            variables: {
                name,
                genre,
                authorId
            },
            refetchQueries: [{ query: getBooksQuery }]
        })
    }

    return(
        <form id="add-book" onSubmit={handleSubmit}>
                <div className="field">
                    <label>Book name:</label>
                    <input type="text" onChange={e => setName(e.target.value)} />
                </div>
                <div className="field">
                    <label>Genre:</label>
                    <input type="text" onChange={e => setGenre(e.target.value)}/>
                </div>
                <div className="field">
                    <label>Author:</label>
                    <select onChange={e => setAuthorId(e.target.value)}>
                        <option>Select author</option>
                        { displayAuthors() }
                    </select>
                </div>
                <button type="submit">+</button>

            </form>
    )
}

export default compose(
    graphql(getAuthorsQuery, {name: 'getAuthorsQuery'}),
    graphql(addBookMutation, {name: 'addBookMutation'})
)(AddBook)