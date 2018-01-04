import React, { Component } from 'react';
import './Header.css';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import logo from './logo.svg';

class Header extends Component {

  componentDidMount = () => {
    this.props.getHouseData();
  }

  render() {
    return (
      <div>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
        </div>
      </div>
    ) 
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getHouseData: getHouseData => {
      dispatch(actions.getHouseData());
    }
  }
}

export default connect(null, mapDispatchToProps)(Header);
