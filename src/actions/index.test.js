import * as actions from './index';
import mockHouseData from '../helpers/mockHouseData';

describe('actions tests', () => {
  it('should return an action with type ADD_HOUSE_DATA and expected payload', () => {
    const expectedResponse = {
      type: 'ADD_HOUSE_DATA',
      houseData: mockHouseData
    }

    expect(actions.addHouseData(mockHouseData)).toEqual(expectedResponse);
  })
})