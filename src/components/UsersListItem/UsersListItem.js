import React from 'react';
import PropTypes from 'prop-types';

const UsersListItem = ({ userData: { average, name, attendance } }) => (
  <li>
    <div>{average}</div>
    <div>{name}</div>
    <div>{attendance}</div>
    <button>X</button>
  </li>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string,
    name: PropTypes.string,
    attendance: PropTypes.string.isRequired,
  }),
};

export default UsersListItem;
