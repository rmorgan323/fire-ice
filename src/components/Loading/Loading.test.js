import React from 'react';
import { shallow } from 'enzyme';
import Loading from './Loading';

describe('loading tests', () => {
  it('should match the snapshot', () => {
    const renderedApp = shallow(<Loading />);

    expect(renderedApp).toMatchSnapshot();
  })
})