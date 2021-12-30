import React from 'react';
import foto2 from '../img/carrousel-3.jpg';

class Homosapiens extends React.Component {
    constructor(props) {
      super(props);
      this.state = {  }
    }
    render() { 
      return ( <div className='main'>
        <img className='homosapiensfoto' src={foto2} alt /> 
      </div> );
    }
  }
   
  
  export default Homosapiens;