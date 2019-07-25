import React from "react";
import { connect } from 'react-redux'
import {  Link } from "react-router-dom";
import  Logout from './Logout'


function Navbar({ currentUser}) {
  return (

    <div className= "NavBar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          
       
          <li>
          {currentUser ? <Link to="/buildings">Search Buildings</Link> : <a target="_blank" rel="noopener noreferrer" href="https://www1.nyc.gov/nyc-resources/service/2195/pay-a-parking-ticket">NYC Tickets</a>}
         
          </li>
         <li>
          {currentUser ? <Link to="/search">Search Plates </Link> : <Link to="/signup">Sign Up</Link>}
        
        </li> 
          <li>
            <a target="_blank" rel="noopener noreferrer" href="https://secure24.ipayment.com/NYCPayments/nycbookmark_1.htm">Pay Your Tickets</a>
          </li>
          {/* <li>
        {!currentUser ? <Link to="/">Beta Testing</Link> : <Link to="/buildings">Beta Testing</Link>}
        </li> */}
        <li>

          {!currentUser ? <Link to="/login">Login</Link> : /*<Link to="/logout">Log Out</Link> */ <Logout />}
        </li>
        </ul>
        
  
      </div>

  );
}







const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}



export default connect(mapStateToProps)(Navbar)
