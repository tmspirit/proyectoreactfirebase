import React, {Component} from 'react';
import './App.css';
import fire from './config/Fire';
import Login from './Login';
import Home from './Home';

class App extends Component {
  
  state={
    user:{}
  }
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.authListener();
  }
  authListener(){
    //Compruebo si el usuario se ha loggeado
    fire.auth().onAuthStateChanged((user)=>{
      if(user){
        //Usuario loggeado
        this.setState({user});
      }else{
        //Usuario NO logueado
        this.setState({user:null});
      }
    });
  }
  render(){
    return (
      <div className="App">
        {/* Si el usuario esta loggeado voy a Home sino Login */}
        {this.state.user ? (<Home />) :(<Login/>)}
      </div>
    );
  }
}

export default App;
