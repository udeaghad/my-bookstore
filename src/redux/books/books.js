const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';



export const addedBook = payload => ({
  type: ADD_BOOK,
  payload
});

export const removedBook = () => ({
  type: REMOVE_BOOK,
});

const books = [
{id: 1, title: '1000 ways to die', author:'James bond'},
{id: 2, title: 'Learning React', author: 'Egghead'},
{id: 3,title: 'Connecting React to Redux', author: 'RakibTG'}
];

export default (state = books, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state, action.payload,
      ];

    case REMOVE_BOOK:
      return [
        ...state.slice(0, action.payload.index),
        ...state.slice(action.payload.index + 1, state.length),
      ];

    default:
      return state;
  }
};
