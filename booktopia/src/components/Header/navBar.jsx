import React from 'react';
// import './navBar.scss';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar =() => {
        return (
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
   <Link className="navbar-brand" to="/">Booktopia</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>

    <div className="navbar-middle" id="navbarNavAltMarkup">
      <div className="navbar-nav">
       <NavLink className="nav-link" aria-current="page" to="/Home">Home</NavLink>
       <NavLink className="nav-link" to="/search">Search</NavLink>
       <NavLink className="nav-link" to="/about">About</NavLink>
       <NavLink className="nav-link" to="/logIn">LogIn</NavLink>
       <NavLink className="nav-link" to="/Home/new">AddBook</NavLink>
       <NavLink className="nav-link" to='/menu' title="Menu"><FontAwesomeIcon icon={faBars} /></NavLink>
      </div>
    </div>
  </div>
</nav>

 //                 <div class="collapse" id="navbarToggleExternalContent" data-bs-theme="dark">
//   <div class="bg-dark p-4">
//     <h5 class="text-body-emphasis h4">Collapsed content</h5>
//     <span class="text-body-secondary">Toggleable via the navbar brand.</span>
//   </div>
// </div> */}

            //     <nav className="navbar navbar-expand-xl border-bottom border-body" data-bs-theme="white">
            //     <div className="container-fluid d-flex justify-content-around">
            //        <NavLink href='#' className="navbar-brand"><h2>Booktopia</h2></a>
            //         <form className="d-flex" role="search">
            //             <input className="form-control form-control-lg" type="search" placeholder="Search" aria-label="Search"/>
            //             <button className="btn btn-outline-success" type="submit">Search</button>
            //         </form>
            //         <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            //             <span class="navbar-toggler-icon"></span>
            //         </button>
            //         {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            //             <span class="navbar-toggler-icon"></span>
            //         </button> */}
            //     </div>
            // </nav>
            // </div>       
                    
        );
}
 
export default Navbar;

// {/* <nav>
//         <div id="menu" className={isMenuOpen ? 'open' : ''}>
//           <a href="/" className="btn-close" onClick={closeMenu}>
//             ×
//           </a>
//           <a href="https://www.dbooks.org/" rel="home" title="dBooks">
//             Home
//           </a>
//           <a href="/search/" rel="search" title="Search Books">
//             Search Books
//           </a>
//           <a href="/add/" title="Submit a Book">
//             Add a Book
//           </a>
//           <a href="/subscription/" title="Subscribe to Books">
//             Subscribe
//           </a>
//           <a href="https://feeds.feedburner.com/dBooksorg" rel="noreferrer" title="RSS Feed" target="_blank">
//             RSS Feed
//           </a>
//           <a href="/api/" title="Books API">
//             Open API
//           </a>
//           <a href="/privacypolicy/" title="Privacy Policy">
//             Privacy Policy
//           </a>
//           <a href="/about/" title="About dBooks">
//             About
//           </a>
//           <a href="https://t.me/dbooks_org" title="Join dBooks Telegram Channel" target="blank">
//             Telegram Channel
//           </a>
//           <a href="/contact/" title="Contact Us">
//             Contact
//           </a>
//         </div>
//       </nav> */}         