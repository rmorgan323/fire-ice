import { houses } from '../houseData-reducer.js';
import * as actions from '../../actions';
import mockHouseData from '../../helpers/mockHouseData';

describe('houseData reducer tests', () => {
  it('should return the correct default state', () => {
    const expected = [];

    expect(houses(undefined, [])).toEqual(expected);
  });

  it('should return the current state when passed a function that does not exist', () => {
    const mockAction = { type: 'FAKE' };
    const mockState = { name: 'state_of_things' };

    expect(houses(mockState, mockAction)).toEqual(mockState);
  });

  it('should update store when passed ADD_HOUSE_DATA action', () => {
    const expected = mockHouseData;

    expect(houses({}, actions.addHouseData(mockHouseData))).toEqual(expected);
  });
});