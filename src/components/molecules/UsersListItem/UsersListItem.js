import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from '../../atoms/DeleteButton/DeleteButton';
import { Wrapper } from './UsersListItem.styles';
import { Average } from './UsersListItem.styles';
import { StyledInfo } from './UsersListItem.styles';

const UsersListItem = ({ deleteUser, userData: { average, name, attendance } }) => (
  <Wrapper>
    <Average value={average}>{average}</Average>
    <StyledInfo>
      <p>{name}</p>
      <p>attendance: {attendance}</p>
    </StyledInfo>
    <DeleteButton
      onClick={() => {
        deleteUser(name);
      }}
    />
  </Wrapper>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string,
    name: PropTypes.string,
    attendance: PropTypes.string.isRequired,
  }),
};

export default UsersListItem;
