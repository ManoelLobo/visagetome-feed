import React from 'react';
import PropTypes from 'prop-types';

const Header = props => <h1>{props.appName}</h1>;

Header.propTypes = {
  appName: PropTypes.string.isRequired,
};

export default Header;
