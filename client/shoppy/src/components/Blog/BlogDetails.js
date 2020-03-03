import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { postById, addComment } from "../actions/postActions";

const BlogDetails = props => {
  useEffect(() => {
    props.postById(props.match.params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [formData, setFormData] = useState({ text: "" });

  const onChangeHandler = e => {
    setFormData({ text: e.target.value });
  };

  const submitFormData = e => {
    e.preventDefault();
    props.addComment(formData, props.post.id);
  };

  const [isPostFormOpen, setIsPostFormOpen] = useState(false);

  const togglePostForm = () => {
    setIsPostFormOpen(!isPostFormOpen);
  };

  return (
    props.post && (
      <div className="post_by_id">
        <h2>{props.post.title}</h2>
        <div className="post_by_id_img_desc">
          <img alt="" src={props.post.img} />
          <p>{props.post.description}</p>
        </div>
        <div className="post_by_id_categories">
          <p>Categories :</p>
          <div className="post_by_id_categories_item">
            {props.post.category.map((item, index) => {
              return (
                <div className="post_by_id_categories_item" key={index}>
                  <p>#{item}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="post_by_id_comments_length">
          <div className="post_by_id_comments_length_inner">
            <p>{props.post.comments.length} COMMENT</p>
            <button onClick={togglePostForm}>
              {!isPostFormOpen ? "Add Comment" : "Close"}
            </button>
          </div>
          <div className="post_by_id_comments_social_icons">
            <i className="fas fa-plus-square"></i>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-google-plus-g"></i>
          </div>
        </div>
        {props.post.comments.map((item, index) => {
          return (
            <div className="post_by_id_comment" key={index}>
              <span>{index + 1}</span>
              <div className="post_by_id_comment_text">
                <span className="post_by_id_comment_user">user </span>
                <span>on october 9, 2016 at 2:14 pm</span>
                <p>{item.text}</p>
                <div></div>
              </div>
            </div>
          );
        })}
        {/* <div className="post_by_id_comment">
          <span>{props.post.comments.length}</span>
          <div className="post_by_id_comment_text">
            <span className="post_by_id_comment_user">user </span>
            <span>on october 9, 2016 at 2:14 pm</span>

            <div>
              {props.post.comments.map((item, index) => {
                return <div key={index}>{item.text}</div>;
              })}
            </div>
          </div>
        </div> */}
        {isPostFormOpen && (
          <div className="add_post_form">
            <h2>Add Your Comment</h2>
            <form onSubmit={submitFormData}>
              <textarea
                type="text"
                value={formData.text}
                onChange={e => onChangeHandler(e)}
              ></textarea>
              <button>Submit</button>
            </form>
          </div>
        )}
      </div>
    )
  );
};

const actions = { postById, addComment };
const mapStateToprops = state => {
  return {
    post: state.posts.post
  };
};

export default connect(mapStateToprops, actions)(BlogDetails);
