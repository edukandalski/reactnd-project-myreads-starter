import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ListShelf from './ListShelf'

class ListBooks extends Component {
  render() {
    const {books, onEditBookStatus} = this.props
    //separate books based on the shelf
    const currentlyReading = books.filter((book) => book.shelf === 'currentlyReading')
    const wantToRead = books.filter((book) => book.shelf === 'wantToRead')
    const read = books.filter((book) => book.shelf === 'read')

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <ListShelf shelfTitle='Currently Reading' books={currentlyReading} onEditBookStatus={onEditBookStatus}/>
          <ListShelf shelfTitle='Want to Read' books={wantToRead} onEditBookStatus={onEditBookStatus}/>
          <ListShelf shelfTitle='Read' books={read} onEditBookStatus={onEditBookStatus}/>
        </div>
        <div className="open-search">
          <Link 
            to='/search'
            className='open-search'
          />
        </div>
      </div>
    )
  }
}

export default ListBooks