import React from 'react';
import Form from '../navigation/form';
import Joi from 'joi-browser';
import { getBook, saveBook } from '../bookApi/recent';
import { getGenres } from '../bookApi/genres';

class AddBook extends Form {
    state = { 
        data:{
            title: "",
            genreId: "",
            subtitle: "",
            authors: "",
            image: "",
            url: "",
            description: ""
        },
        genres:[],
        errors:{}
     };
     schema= {
        _id: Joi.string(),
        title: Joi.string().required().label("Title"),
        genreId: Joi.string().required().label("Genre"),
        subtitle: Joi.string().required().min(0).max(100).label("Subtitle"),
        authors: Joi.string().required().min(0).max(300).label("Authors"),
        image: Joi.string().uri({ scheme: ['http', 'https'] }).required(),
        url: Joi.string().uri({ scheme: ['http', 'https'] }).required(),
        description: Joi.string().uri({ scheme: ['http', 'https'] }).required()
    };
    componentDidMount(){
        const genres=getGenres();
        this.setState({genres});
        const bookId= this.props.match.params.id;
        if(bookId==="new") return;
        const book=getBook(bookId);
        //if(!book) return this.props.history.replace("/not-found");
        this.setState({data: this.mapToViewModel(book)});
    }
    // mapToViewModel(books) {
    //     return books.map(book => {
    //       const { _id, title, authors } = book || {};
    //       return {
    //         id: _id,
    //         title: title || '',
    //         authors: authors || []
    //       };
    //     });
    //   }
    // mapToViewModel(books){
    //     return books.map(book=>{
    //         if(book){
    //             return{
    //                 _id: book._id,
    //                 title: book.title,
    //                 genreId:book.genre._id,
    //                 subtitle: book.subtitle,
    //                 authors: book.authors
    //             };
    //         }else{
    //             return {};
    //         }
    //     });
    // }
    mapToViewModel(books) {
        if (books && books.length > 0) {
          return books.map(book => {
            if (book) {
              return {
                id: book._id,
                title: book.title,
                genreId:book.genre._id,
                subtitle: book.subtitle,
                authors: book.authors,
                image: book.image,
                url: book.url,
                description: book.description
              };
            } else {
              return null;
            }
          });
        } else {
          return [];
        }
      }
    doSubmit=()=>{
        saveBook(this.state.data);
        this.props.history.push("/Home");
    }
    render() { 
        return (
            <div>
                <h1>Add Book</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("title","Title")}
                    {this.renderSelect("genreId","Genre", this.state.genres)}
                    {this.renderInput("subtitle","Subtitle")}
                    {this.renderInput("authors","Authors")}
                    {this.renderInput("image","ImageUrl")}
                    {this.renderInput("url","downloadUrl")}
                    {this.renderInput("description","description")}
                    {this.renderButton("Save")}
                </form>
            </div>
        );
    }
}
 
export default AddBook;