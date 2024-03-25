import React, { Component } from 'react';
//import Header from './trail';
import Welcome from './../Welcome/welcome';
import Book from './../Books/books';
class Home extends Component {
    //state = {  } 
    render() { 
        return (
            <div className="container">
                    <Welcome/>
                <div>
                    <Book/>
                </div>
            </div>
            
        
        );
    }
}
 
export default Home;