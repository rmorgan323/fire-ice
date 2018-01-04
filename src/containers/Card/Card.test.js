import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';

describe('card tests', () => {
  it('should match the snapshot', () => {
    const renderedApp = shallow(<Card />)

    expect(renderedApp).toMatchSnapshot();
  })
})