import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'

class Book extends Component {
  state = {
    book: {}
  }

  componentDidMount() {
    //only use  API if needed, in the initial screen we already have the books complete info
    //when we're listing books from Search, then we have some missing info, so call API and setState
    if (this.props.useAPI)
      BooksAPI.get(this.props.book.id).then(data => this.setState({ book: data }))
  }

  render() {
    const {book, useAPI, onEditBookStatus} = this.props
    //position in the correct variable, if no need for API we use data from the props, else get from state
    const b = useAPI ? this.state.book : book

    return (
      <div className="book">
        {b.title && b.authors && b.shelf && (
          <div>
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${b.imageLinks.smallThumbnail})` }}></div>
              <div className="book-shelf-changer">
                <select
                  value={b.shelf}
                  onChange={(event) => onEditBookStatus(b, event.target.value) }>
                  <option value="none" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{b.title}</div>
            {b.authors.map((author) => (
              <div className="book-authors" key={author}>{author}</div>
            ))}
          </div>
        )}                           
      </div>
    )
  }
}

export default Book