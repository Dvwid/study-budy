import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../atoms/Button/Button';
import { Wrapper } from './UsersListItem.styles';
import { Average } from './UsersListItem.styles';
import { StyledInfo } from './UsersListItem.styles';

const showIndex = (index) => {
  alert(`This person number is ${index + 1}`);
};

const UsersListItem = ({ index, userData: { average, name, attendance } }) => (
  <Wrapper>
    <Average value={average}>{average}</Average>
    <StyledInfo>
      <p>{name}</p>
      <p>attendance: {attendance}</p>
    </StyledInfo>
    <Button
      onClick={() => {
        showIndex(index);
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
