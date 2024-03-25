
import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './components/Home/home';
import Search from './components/Search/search';
import About from './components/About/about';
import Navbar from './components/Header/navBar';
import Book_view from './components/Books/bookView';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import AddBook from './navigation/addBook';
import { Switch,Redirect } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'
// import GenreView from './components/genreView';
// import Route from 'react-dom';
class App extends Component {
  
  render() { 
    return (
      <React.Fragment>
      <ToastContainer/>
      <Navbar/>
      <main className='container'>
        <Switch>
        <Route path='/Home' exact component={Home}/>
        <Route path="/search" exact component={Search}/>
        <Route path="/about" exact component={About}/>
        <Route path='/not-found' exact component={() => <h1>Not Found</h1>}/>
        <Route path='/logIn' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path='/Home/new' component={AddBook}/>
        {/* <Route path='/Home/:id' component={GenreView}/> */}
        <Route path='/books/:id' component={Book_view}/>
        <Redirect from='/' to='/Home'/>
        <Redirect to='/not-found'/>
        </Switch>
      </main>
      </React.Fragment>

    );
  }
}
 
export default App;






















// import logo from './logo.svg';
// import './App.css';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
