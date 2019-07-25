///nothing is being rendered built for future use when add more fetures 


import React from 'react';
import { connect } from 'react-redux'
// import logo from '../BridgeNYC'  this file needs to be fixed
class Home extends React.Component {
//  { this.props.currentUser }
  render() {

    const pic = "https://www.yalefox.com/wp-content/uploads/2018/09/nyc-logo.png"
    return(
 
        <div className="App-header">
          Welcome to NYC Violations lookup 
        <img src={pic} className="App-logo" alt="logo" />
        <div>
          {/* <img src={logo} alt="Logo" /> */}
        </div>
        </div>
       

       


     
    );
  }
}
const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}



export default connect(mapStateToProps)(Home)
