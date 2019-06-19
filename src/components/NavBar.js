import React from "react";
import { connect } from 'react-redux'
import {  Link } from "react-router-dom";
import  Logout from './Logout'
// function logoutHandler (event){
//   event.preventDefault();
//   Logout()
// }

function Navbar({ currentUser}) {
  return (

    <div className= "NavBar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
     
          {!currentUser ? <Link to="/login">Login</Link> : /*<Link to="/logout">Log Out</Link> */ <Logout /> }
          </li>
       
          <li>
          {currentUser ? <Link to="/search">Search </Link> : <Link to="/signup">Sign Up</Link>}
          </li>
         <li>
          {currentUser ? <Link to="/plates">Past Searches</Link> : ""}
        
        </li> 
          <li>
            <a target="_blank" rel="noopener noreferrer" href="https://secure24.ipayment.com/NYCPayments/nycbookmark_1.htm">Pay Your Tickets</a>
          </li>
        </ul>

        {/* <hr /> */}
        
  
      </div>

  );
}







const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}



export default connect(mapStateToProps)(Navbar)
