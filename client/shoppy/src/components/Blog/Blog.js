import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";
import { Link } from "react-router-dom";
import "./Blog.scss";

const Blog = props => {
  useEffect(() => {
    props.fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [currentPage, setCurrentPage] = useState(0);
  const [postPerPage, setPostPerPage] = useState(3);

  const previousPage = () => {
    if (currentPage !== 0) {
      setCurrentPage(currentPage - 3);
      setPostPerPage(postPerPage - 3);
    } else {
      setCurrentPage(0);
    }
  };
  const nextPage = () => {
    if (currentPage < props.posts.length - 3) {
      setCurrentPage(currentPage + 3);
      setPostPerPage(postPerPage + 3);
    } else {
      setCurrentPage(6);
    }
  };
  return (
    <div className="posts">
      {props.posts.slice(currentPage, postPerPage).map(item => {
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
      <div className="pagination">
        <button onClick={previousPage} className="btn_prev">
          <i className="fas fa-chevron-left"></i>
          <p>Previous</p>
        </button>
        <div className="pagination_pages">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
        </div>
        <button onClick={nextPage} className="btn_next">
          <p>Next</p>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
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
