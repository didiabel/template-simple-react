import React from 'react';
import { Link } from 'react-router-dom';
import fotoheader from '../img/header-simpsons.gif';

class Navbar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {  }
    }
    render() { 
      return ( 
        <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link to={"/"}><img src={fotoheader} alt /></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to={"/1"} class="nav-link active" aria-current="page" href="#">Blog</Link>
        </li>
        <li class="nav-item">
          <Link to={"/2"} class="nav-link" href="#">Contact</Link>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placehoder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      </div>

       );
    }
  }
   
  export default Navbar;

