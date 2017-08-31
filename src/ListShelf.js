import React, { Component } from 'react'
import Book from './Book'

class ListShelf extends Component {
  render() {
    const {shelfTitle, books, onEditBookStatus } = this.props

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => (
              <li key={book.title}>
                <Book book={book} useAPI={false} onEditBookStatus={onEditBookStatus} />              
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default ListShelf