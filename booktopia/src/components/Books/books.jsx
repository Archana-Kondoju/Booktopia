import React, { Component } from 'react';
import { getBooks } from '../../bookApi/bookService';
import { FaDownload} from 'react-icons/fa';
import { FaBookOpen } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Pagination from './../../pagination/pagination';
import {paginate} from './../../pagination/paginate';
import { getGenres } from '../../bookApi/genreService';
import Nav from './../../navigation/nav';
import Rating from './../../bookApi/rating';
// import { genres } from './../bookApi/genres';

class Book extends Component {
    state = { 
        books: [],
        genres: [],
        currentPage: 1,
        pageSize: 6     
    };
    handleGenreSelect = genre => {
        this.setState({selectedGenre : genre})
      }
    async componentDidMount(){
    const {data}=await getGenres();
    const genres=[...data];
    const {data:books}=await getBooks();
    this.setState({books,genres});
    }
    handlePageChange = page =>{
        this.setState({ currentPage: page});
    };
    render() { 
        //const {length: count} = this.state.books;
        const {pageSize, currentPage,selectedGenre, books: allBooks} = this.state;
        const filtered=selectedGenre?allBooks.filter(m=> m.genre._id===selectedGenre._id):allBooks;
        const books = paginate(filtered, currentPage, pageSize);
        return (
            <div>
            <div>
                <Nav items={this.state.genres}
                    textProperty="name"
                    valueProperty="_id"
                    selectedItem={this.state.selectedGenre}
                    onItemSelect={this.handleGenreSelect} />
            </div>
            <div className='wrap index'>
                    <div className="album py-5 bg-body-tertiary">
                        <div className="container">
                            <div className="row row-gap-3 gy-5">
                                {books && books.map(book => (

                                    <div className="col-6 col-md-3" key={book._id}>
                                        <div className="card" style={{ width: '220px', height: '360px' }}>
                                            <div className="image-container">
                                                <Link to={`/books/${book._id}`} key={book._id} title={book.title}>
                                                    <img src={book.image} className="card-img-top img-thumbnails" width="98%" height={205} alt={book.title} />
                                                </Link>
                                            </div>
                                            <div className="card-body" style={{ width: '220px', height: '150px' }}>
                                                <h5 className="card-title" style={{ width: '190px', height: '60px' }}>{book.title}</h5>
                                                {/* //<p className="card-text">Authors: {book.authors}</p> */}
                                                <div className="d-flex justify-content-around" style={{ width: '190px', height: '50px' }}>
                                                    <div className='p-2 align-middle'>
                                                        <a href={book.description}><FaDownload/></a>
                                                    </div>
                                                    <div className='p-2 align-middle'>
                                                        <a href={book.url}><FaBookOpen/></a>
                                                    </div>
                                                    <div className='p-2 align-middle'>
                                                        <Rating/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <br />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <Pagination itemsCount={filtered.length} currentPage={currentPage} pageSize={pageSize} onPageChange={this.handlePageChange} />
                    </div>
                </div></div>                    
        );
    }
}
 
export default Book;


// row-cols-1 row-cols-sm-2 row-cols-md-3 g-3
/* <div class="card" aria-hidden="true">
      <img src={book.image} class="card-img-top" alt="book_image">
      <div class="card-body">
        <h5 class="card-title placeholder-glow">
          <span class="placeholder col-6"></span>
        </h5>
        <p class="card-text placeholder-glow">
          <span class="placeholder col-7"></span>
          <span class="placeholder col-4"></span>
          <span class="placeholder col-4"></span>
          <span class="placeholder col-6"></span>
          <span class="placeholder col-8"></span>
        </p>
        <a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
      </div>
    // </div> */
    