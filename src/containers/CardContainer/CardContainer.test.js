import React from 'react';
import { CardContainer, mapStateToProps } from './CardContainer';
import { shallow } from 'enzyme';
import mockHouseData from '../../helpers/mockHouseData';

describe('card container tests', () => {
  it('should match the snapshot when no houses are in props', () => {
    const renderedApp = shallow(<CardContainer houses={[]} />);

    expect(renderedApp).toMatchSnapshot();
  })

  it('should match the snapshot when houses are in props', () => {
    const renderedApp = shallow(<CardContainer houses={mockHouseData} />);

    expect(renderedApp).toMatchSnapshot();
  })
})

describe('mapStateToProps tests', () => {
  it('should pull houses from store', () => {
    const mockStore = { mockHouseData };
    const result = mapStateToProps(mockStore);

    expect(result.houses).toEqual(mockStore.houses);
  })
})


