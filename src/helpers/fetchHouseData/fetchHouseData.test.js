import fetchHouseData from './fetchHouseData';
import mockHouseData from '../mockHouseData';

describe('fetch house data tests', () => {
  window.fetch = jest.fn().mockImplementation(() => 
    Promise.resolve({
      json: () => Promise.resolve({status: 'success'})
    })
  );

  it('should be a function', () => {
    expect(fetchHouseData).toBeAFunction;
  })

  it('fetchHouseData is called with the correct params', async () => {
    const expected = [
      'http://localhost:3001/api/v1/houses',
      {}
      ];

    await fetchHouseData(mockHouseData);
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  })
})