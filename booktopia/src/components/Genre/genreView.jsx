import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class GenreView extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <div className='justify-content-center'>
                <h1>{this.props.genre}</h1>
                <h3>FREE DOWNLOAD OPEN BOOKS</h3>
                </div>
                <ul> {this.props.books && this.props.books.map(book => (
                    <li key={book._id}>
                        <div className='col200'>
                            <Link to={`/books/${book._id}`} key={book._id} title={book.title}>
                                <img src={book.image} className="card-img-top img-thumbnails" width="98%" height={205} alt={book.title} />
                            </Link>
                        </div>
                        <div className='col100'>
                        <Link to={`/books/${book._id}`} key={book._id} title={book.title}>
                                <h5 className="card-title">{book.title}</h5>
                                <p>Authors: {book.authors}</p>
                        </Link>
                        </div>                    
                    </li>))}
                </ul>
            </div>
        );
    }; 
};
 
export default GenreView;