import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import './Card.css';

const Card = ({ name, founded, seats, titles, coatOfArms, ancestralWeapons, words }) => {

  return (
    <div className="card-component">
      <h2>{name}</h2>
      <h3>Founded: {founded || 'unknown'}</h3>
      <h3>Seats: {seats}</h3>
      <h3>Titles: {titles}</h3>
      <h3>Coat of Arms: {coatOfArms}</h3>
      <h3>Ancestral Weapons: {ancestralWeapons}</h3>
      <h3>Words: {words || 'unknown'}</h3>
    </div>
  )
}

export default Card;
