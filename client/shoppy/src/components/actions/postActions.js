import axios from "axios";
export const FETCH_POSTS = "FETCH_POSTS";
export const POST_BY_ID = "POST_BY_ID";
export const ADD_COMMENT = "ADD_COMMENT";

export const fetchPosts = () => dispatch => {
  axios
    .get("http://localhost:5000/api/posts")
    .then(res => {
      dispatch({
        type: FETCH_POSTS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};
export const postById = id => dispatch => {
  axios
    .get(`http://localhost:5000/api/posts/${id}`)
    .then(res => {
      console.log(res.data);

      dispatch({
        type: POST_BY_ID,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};
export const addComment = (formData, id) => dispatch => {
  console.log(formData);
  axios({
    method: "post",
    data: JSON.stringify(formData),
    headers: { "Content-Type": "application/json" },
    url: `http://localhost:5000/api/posts/add-comment/${id}`
  })
    .then(res => {
      console.log(res.data);
      dispatch({
        type: ADD_COMMENT,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};
