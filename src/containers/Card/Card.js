import React from 'react';
import PropTypes from 'prop-types';
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

Card.propTypes = {
  name: PropTypes.string,
  founded: PropTypes.string,
  seats: PropTypes.string,
  titles: PropTypes.string,
  coatOfArms: PropTypes.string,
  ancestralWeapons: PropTypes.string,
  words: PropTypes.string
}