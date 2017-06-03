import { combineReducers } from 'redux';
/* Redux form basically prevents us from having to wire up a bunch of action creators on our own
 * Make an alias in case key word reducer is used later
 */
import { reducer as formReducer } from 'redux-form';
import PostsReducer from './reducer_posts';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer,
});

export default rootReducer;
