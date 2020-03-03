import { FETCH_POSTS, POST_BY_ID, ADD_COMMENT } from "../actions/postActions";

const initialState = {
  posts: [],
  post: null,
  loading: true
};
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false
      };
    case POST_BY_ID:
      return {
        ...state,
        post: action.payload,
        loading: false
      };
    case ADD_COMMENT:
      return {
        ...state,
        post: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
export default postReducer;
