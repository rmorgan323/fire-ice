import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CardContainer.css';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import Loading from '../../components/Loading/Loading';
import { branch, renderComponent } from 'recompose';

const CardContainer = (props) => {

  const getCleanCardData = () => {
    const houses = props.houses.reduce((houseArray, house) => {
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

  const displayCards = () => {
    const houseData = getCleanCardData();
    const display = houseData.map((data, index) => {
      return <Card 
        name={data.name}
        founded={data.founded}
        seats={data.seats}
        titles={data.titles}
        coatOfArms={data.coatOfArms}
        ancestralWeapons={data.ancestralWeapons}
        words={data.words}
        swornMembers={data.swornMembers}

        key={index}
      />;
    })

    return display;
  }

  return (
    <div className="card-container-component">
      {displayCards()}
    </div>
  )
}

export const mapStateToProps = store => ({
  houses: store.houses
})

const wrappedCardContainer = branch(
  props => !props.houses.length,
  renderComponent(Loading)
)(CardContainer)

export default connect(mapStateToProps, null)(wrappedCardContainer);

CardContainer.propTypes = {
  houses: PropTypes.array
}


