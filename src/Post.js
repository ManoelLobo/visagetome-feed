import React from 'react';
import PropTypes from 'prop-types';

const Post = props => (
  <div className="post">
    <img alt={props.post.user} src={props.post.avatar} />
    <h2 className="user">{props.post.user}</h2>
    <span className="time">{props.post.time}</span>
    <p className="content">{props.post.content}</p>
  </div>
);

Post.propTypes = {
  post: PropTypes.shape({
    user: PropTypes.string,
    time: PropTypes.string,
    avatar: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
};

export default Post;
