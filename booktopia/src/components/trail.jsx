import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header style={{ marginBottom: 0 }}>
      <div className="main wrap">
        <div className="col300 logo">
          <a href="https://www.dbooks.org/" title="dBooks.org" rel="home" className="logo1">
            <img src="/img/logo/dbooks.png" width="120" alt="dBooks" />
          </a>
        </div>
        <div className="col100 se">
          <form action="/search/" method="get" role="search">
            <input className="inp" name="q" autoComplete="off" placeholder="Search Books" type="search" value="" required />
            <button aria-label="submit" className="sbm" type="submit">
              <i className="icon-search" />
            </button>
          </form>
        </div>
        <div className="col300 icon">
          <a href="/subscription/" title="Subscribe to Books">
            <i className="icon-plane" />
          </a>
          <a href="https://feeds.feedburner.com/dBooksorg" title="RSS Feed" rel="noreferrer" target="_blank">
            <i className="icon-rss" />
          </a>
          <a href="/" title="Menu" onClick={toggleMenu}>
            <i className="icon-bars" />
          </a>
        </div>
      </div>
      <div id="overlay" onClick={closeMenu} style={{ display: isMenuOpen ? 'block' : 'none' }} />
      <nav>
        <div id="menu" className={isMenuOpen ? 'open' : ''}>
          <a href="/" className="btn-close" onClick={closeMenu}>
            ×
          </a>
          <a href="https://www.dbooks.org/" rel="home" title="dBooks">
            Home
          </a>
          <a href="/search/" rel="search" title="Search Books">
            Search Books
          </a>
          <a href="/add/" title="Submit a Book">
            Add a Book
          </a>
          <a href="/subscription/" title="Subscribe to Books">
            Subscribe
          </a>
          <a href="https://feeds.feedburner.com/dBooksorg" rel="noreferrer" title="RSS Feed" target="_blank">
            RSS Feed
          </a>
          <a href="/api/" title="Books API">
            Open API
          </a>
          <a href="/privacypolicy/" title="Privacy Policy">
            Privacy Policy
          </a>
          <a href="/about/" title="About dBooks">
            About
          </a>
          <a href="https://t.me/dbooks_org" title="Join dBooks Telegram Channel" target="blank">
            Telegram Channel
          </a>
          <a href="/contact/" title="Contact Us">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;