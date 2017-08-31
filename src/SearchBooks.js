import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {
  state = {
    books: []
  }

  searchAPI(query) {
    if (query)
      BooksAPI.search(query, 20).then(data => this.setState({ books: data }))
                                .catch(error => this.setState({ books: [] }))
    else
      this.setState({ books: [] })
  }

  render() {
    const {onEditBookStatus} = this.props

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className='close-search'>Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange={e => this.searchAPI(e.target.value)}/>            
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books.map((book) => (
              <li key={book.id}>
                <Book book={book} useAPI={true} onEditBookStatus={onEditBookStatus} />              
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks