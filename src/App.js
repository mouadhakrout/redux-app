import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import{connect} from 'react-redux';
import {updateUser} from './actions/user-actions'
class App extends Component {
    constructor(props){
        super(props);
        this.onUpdateUser = this.onUpdateUser.bind(this);
    }
    onUpdateUser(){
        this.props.onUpdateUser('mouadh weld oma')
    }
    render() {
      console.log(this.props, this.state);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <button onClick={this.onUpdateUser}></button>
          <p>{this.props.user}</p>
      </div>
    );
    }
}
const mapStateToProps = state => ({
    products: state.products,
    user:state.user
});
const mapActionsToProps = {
    onUpdateUser:updateUser
};
export default connect(mapStateToProps,mapActionsToProps) (App);
