import React, { Component } from 'react'
import fire from './config/Fire';

export default class Home extends Component {

    logout(){
        //Cierro sesion
        fire.auth().signOut();
    }
    render() {
        return (
            <div>
                <h1>Estas en Home</h1>
                <button onClick={this.logout}>Cerrar sesion</button>
            </div>
        )
    }
}
