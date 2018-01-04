import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import './CardContainer.css';
import { connect } from 'react-redux';

class CardContainer extends Component {
  constructor() {
    super();
  }

  displayCards = () => {
    const houses = this.props.houses.reduce((houseArray, house) => {
      houseArray.push({
        name: house.name,
        founded: house.founded,
        seats: house.seats.join(', '),
        titles: house.titles.join(', '),
        coatOfArms: house.coatOfArms,
        ancestralWeapons: house.ancestralWeapons.join(', '),
        words: house.words
      })

      return houseArray;
    }, [])
    console.log(houses);
  }

  render() {
    return (
      <div>
        {this.displayCards()}
      </div>
    )
  }
}

const mapStateToProps = store => ({
  houses: store.houses
})

export default connect(mapStateToProps, null)(CardContainer);