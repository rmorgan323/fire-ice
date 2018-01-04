import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import './Header.css';
import { connect } from 'react-redux';
import * as actions from '../../actions';

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
        HEADER
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