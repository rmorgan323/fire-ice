import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import './CardContainer.css';
import { connect } from 'react-redux';
import Card from '../Card/Card';

class CardContainer extends Component {
  constructor() {
    super();
  }

  getCleanCardData = () => {
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
    return houses
  }

  displayCards = () => {
    const houseData = this.getCleanCardData();
    console.log(houseData)

    const display = houseData.map((data, index) => {
      return <Card 
        name={data.name}
        founded={data.founded}
        seats={data.seats}
        titles={data.titles}
        coatOfArms={data.coatOfArms}
        ancestralWeapons={data.ancestralWeapons}
        words={data.words}
        key={index}
      />;
    })

    return display;
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