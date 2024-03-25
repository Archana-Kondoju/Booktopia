import React, { useState } from 'react';
import './search.css';
import { FormGroup, Input} from 'reactstrap';
import {Link} from 'react-router-dom'
function App() {
  const [keyword, setKeyword] = useState("");
  
  return (
    <div className="App">
      <header className="App-header">
        <h3>Booktopia</h3>
        <p>
          Search your required books here
        </p>
          <FormGroup>
            <Input type="text" name="searchText" id="searchText" value={keyword} onChange={e => setKeyword(e.target.value)}/>
          </FormGroup>
          <FormGroup>
          <Link to={'/result/'+ keyword} className="search-button"> Search Now </Link>
          </FormGroup>
      </header>
    </div>
  );
}

export default App;