import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import './Header.css';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import logo from './logo.svg';

class Header extends Component {
  constructor() {
    super();
  }

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

const mapStateToProps = store => {

}

const mapDispatchToProps = dispatch => {
  return {
    getHouseData: getHouseData => {
      dispatch(actions.getHouseData());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);