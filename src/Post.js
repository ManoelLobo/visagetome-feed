import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = props => (
  <div className="post-header">
    <div className="user-data">
      <h2 className="user">{props.user}</h2>
      <span className="time">{props.time}</span>
    </div>
    <img className="avatar" alt={props.user} src={props.avatar} />
  </div>
);

PostHeader.propTypes = {
  avatar: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

const Post = props => (
  <div className="post">
    <PostHeader avatar={props.data.avatar} user={props.data.user} time={props.data.time} />
    <p className="content">{props.data.content}</p>
  </div>
);

Post.propTypes = {
  data: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    content: PropTypes.string,
  }).isRequired,
};

export default Post;
