export const houses = (state=[], action) => {
  switch (action.type) {
  case 'ADD_HOUSE_DATA':
    return action.houseData;
  default:
    return state;
  }
};