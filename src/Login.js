import React, { Component } from "react";
import fire from "./config/Fire";

export default class Login extends Component {
  usuario = React.createRef();
  contraseña = React.createRef();

  constructor(props) {
    super(props);
    //Este enlace es necesario para hacer que `this` funcione en el callback
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
  }
  login(e) {
    e.preventDefault();
    var misusuario = this.usuario.current.value;
    var micontraseña = this.contraseña.current.value;

    fire
      .auth()
      .signInWithEmailAndPassword(misusuario, micontraseña)
      .then(u => {})
      .catch(function(error) {
        console.log(error);
      });
  }

  signup(e) {
    e.preventDefault();
    var miusuario = this.usuario.current.value;
    var micontraseña = this.contraseña.current.value;
    fire
      .auth()
      .createUserWithEmailAndPassword(miusuario, micontraseña)
      .then(u => {})
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <form>
          <div>
            <label htmlFor="exampleInputEmail">Correo electronico: </label>
            <input
              type="email"
              name="email"
              id="exampleInputEmail"
              ref={this.usuario}
            ></input>
          </div>
          <div>
            <label htmlFor="exampleInputPassword">Contraseña: </label>
            <input
              type="password"
              name="password"
              id="exampleInputPassword"
              ref={this.contraseña}
            ></input>
          </div>
          <button type="submit" onClick={this.login}>
            Login
          </button>
          <button onClick={this.signup}>Registrarse</button>
        </form>
      </div>
    );
  }
}
