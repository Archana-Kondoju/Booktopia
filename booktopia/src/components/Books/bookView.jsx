import React, { useEffect, useState } from 'react';
// import { getBook, getBooks } from '../../bookApi/recent.js';
import { useParams } from 'react';
import {toast} from 'react-toastify';
import axios from 'axios';
import { BookContainer, BookMainContainer, BooksContainer,StyledImage, DownloadButton, ReadButton, Heading1, Heading2} from './styledBookView.js';
const Book_view = () => {
    const {id}=useParams;
    const [book, setBook] = useState({});
    useEffect(() => {
        const bookData=async()=>{
            try{
                const {data}=await axios.get(`http://localhost:3000/api/books/${id}`,{id});
                setBook(data);
            }
            catch(error){
                toast.error(error.response.data);
            }
        }
        bookData();
    },[id]);
    return ( 
        <BookMainContainer>
            <BookContainer>
                <h1 style={{textAlign:"center", fontFamily:"monospace"}}><q>{book.title}</q></h1>
                <BooksContainer>
                    <StyledImage src={book.image}/>
                    <div style={{margin:20, fontFamily:"monospace"}}>
                        <Heading1>Title:</Heading1>
                        <Heading2>{book.title}</Heading2>
                        <Heading1>Author:</Heading1>
                        <Heading2>{book.authors}</Heading2>
                        <Heading1>Description:</Heading1>                        
                        <Heading2>{book.description}</Heading2>
                    </div>
                    <div style={{textAlign:"center", alignContent:"center"}}>
                        <ReadButton>Read</ReadButton>
                        <DownloadButton>Download</DownloadButton>
                    </div>
                </BooksContainer>
            </BookContainer>
        </BookMainContainer>
    )
}
 
export default Book_view;
// class Book_view extends Component {
//     state = { 
//         books: getBooks(),
//         book: getBook({id: this.props.match.id})
//      };
//     render() {
//         if (this.state.book === undefined || this.state.book._id === undefined) {
//             return <div>Book not found.</div>
//         }
//         return (
//             <div>
//                 <h1>{this.state.book._id}</h1>
//                 <p>Title: {this.state.book.title}</p>
//                 <p>Author: {this.state.book.authors}</p>
//             </div>
//         )
//     }
// }
 
// export default Book_view;

