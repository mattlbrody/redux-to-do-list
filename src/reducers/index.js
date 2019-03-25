import { combineReducers } from 'redux';

const itemsList = () => {
  return [
    {item: 'Play mario kart', id: 0},
    {item: 'Code some projects', id: 1},
    {item: 'Study algorithms', id: 2},
  ]
}

const addItemReducer = (addItem=null, action) => {
  if(action.type === 'ADD_ITEM') {
    return action.payload;
  }

  // should I be returning the entire item list?
  return addItem;
}

export default combineReducers({
  items: itemsList,
  addItem: addItemReducer
})