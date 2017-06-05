import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function(state = {}, action) {
  switch(action.type) {
    case DELETE_POST:
      // Look at state object, and if has a key of the post id, drop it and return a new object that doesn't contain that id
      return _.omit(state, action.payload)
    case FETCH_POST:
      //const post = action.payload.data;
      // Take all existing posts, take all out of state object and put them into this new object that we are returning
      //const newState = { ...state };
      //newState[post.id] = post;
      //return newState;
      // This is identical to the above code
      return { ...state, [action.payload.data.id]: action.payload.data };
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}