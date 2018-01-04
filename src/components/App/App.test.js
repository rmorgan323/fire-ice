import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('app tests', () => {
  it('should match the snapshot', () => {
    const renderedApp = shallow(<App />)

    expect(renderedApp).toMatchSnapshot();
  })
})