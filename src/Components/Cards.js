import React from 'react';
import maggie from "../img/maggie.jpg";
import bart from "../img/bart.jpg";
import homer from "../img/homer.jpg";




class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
        <div className='cards d-flex justify-content-between'>
            <div class="card">
               <img class="card-img-top " src={maggie} alt="Card image cap"/>
                 <div class="card-body">
                   <h5 class="card-title">Maggie</h5>
                   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                   <button class="btn btn-primary">Go somewhere</button>
                 </div>
             </div>
             <div class="card">
               <img class="card-img-top" src={bart} alt="Card image cap"/>
                 <div class="card-body">
                   <h5 class="card-title">Bart</h5>
                   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                   <button class="btn btn-primary">Go somewhere</button>
                 </div>
             </div>
             <div class="card">
               <img class="card-img-top" src={homer} alt="Card image cap"/>
                 <div class="card-body">
                   <h5 class="card-title">Homer</h5>
                   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                   <button class="btn btn-primary">Go somewhere</button>
                 </div>
             </div>
         </div> );
    }
}
 
export default Cards;