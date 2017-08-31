import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => 
      this.setState({ books }))
  }

  editBookStatus = (book, newShelf) => {
    let bookUpdate = book
    bookUpdate.shelf = newShelf
    BooksAPI.update(book, newShelf).then( this.setState(state => ({
                                            books: state.books.filter(b => b.title !== book.title).concat([bookUpdate])
                                    }))
    )
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks 
            books={this.state.books}
            onEditBookStatus={this.editBookStatus}
          />
        )}/>
        <Route path='/search' render={({history}) => (
          <SearchBooks
            onEditBookStatus={this.editBookStatus}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
