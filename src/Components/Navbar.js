import React from 'react';
import fotoheader from '../img/header-simpsons.gif';

class Navbar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {  }
    }
    render() { 
      return ( 
        <div>
          <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
            <img src={fotoheader} alt />  
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>
      </div>
       );
    }
  }
   
  export default Navbar;

