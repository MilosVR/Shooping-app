import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";
import { Link } from "react-router-dom";
import "./Blog.scss";

const Blog = props => {
  useEffect(() => {
    props.fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="posts">
      {props.posts.map(item => {
        return (
          <div className="post" key={item.id}>
            <div className="post_description">
              <h1>{item.title}</h1>
              <p>{item.description.split(".")[0]}.</p>
              <Link to={`/blog/${item.id}`}>
                <button>Read More</button>
              </Link>
            </div>
            <div className="post_image">
              <img alt="" src={item.img} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

const actions = { fetchPosts };
const mapStateToProps = state => {
  return {
    posts: state.posts.posts
  };
};

export default connect(mapStateToProps, actions)(Blog);
