import fetchHouseData from '../helpers/fetchHouseData/fetchHouseData';

export const getHouseData = () => async dispatch => {
  const houseData = await fetchHouseData();

  dispatch(addHouseData(houseData));
};

export const addHouseData = houseData => ({
  type: 'ADD_HOUSE_DATA',
  houseData
});