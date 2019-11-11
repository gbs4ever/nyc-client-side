import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import Navbar from './components/NavBar'
import {getCurrentUser} from './actions/currentUser.js'
import LoginForm from './components/LoginForm'
import SignUp from './components/SignUp'
import Home from './components/Home'
import BuildingInput  from './components/BuildingInput'
import ViolationContainer from './container/ViolationContainer.js'
import BuildingsContainer from './container/BuildingsContainer.js'
import PlatesContainer from './container/PlatesContainer.js'
import PlateInput from './components/PlateInput'
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Logout from './components/Logout'


class App extends React.Component {
    // <ViolationContainer />
      
  componentDidMount() {
   
    this.props.getCurrentUser()
}
  render(){
    
  return (
    <Router>
    <div  className="App">
      
      <Navbar />
        <div id= "imagebackground">
        {this.props.currentUser ? <Route path="/" component={Home} /> : <Redirect to="/login" />} 
        <Route exact path="/buildings" component={BuildingInput} />
        <Route exact path="/buildings/index" component={BuildingsContainer} />
        <Route exact path="/signup" render={() => (!this.props.currentUser ? <SignUp/> : <Redirect to="/search" />)} />
        <Route exact path="/logout" render={() => <Logout/> }        />
        <Route exact path="/login" render={() => ( !this.props.currentUser ? <LoginForm /> : <Redirect to="/search" /> )} />
        <Route exact path="/violations" render={() => <ViolationContainer />} />
        <Route exact path="/plates" render={() => <PlatesContainer />} />
        <Route exact path="/search" component={PlateInput} />
    
    
     
    
        </div>
         </div>
    </Router>
  

  

  );
  }
}
const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}



export default connect(mapStateToProps, { getCurrentUser })(App)
