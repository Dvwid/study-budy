import React, { useState, useEffect } from 'react';
import { users as usersData } from '../../../data/users';
import { Button } from '../../atoms/Button/Button';
import FormField from '../../molecules/FormField/FormField';
import { Wrapper } from '../../organisms/UsersList/UsersList.styles';
import PropTypes from 'prop-types';

const Form = ({ handleAddUser, formValues: { name = '', attendance = '', average = 0 }, handleInputChange }) => {
  return (
    <>
      <Wrapper as="form" onSubmit={handleAddUser}>
        <FormField label="Name" id="name" name="name" value={name} onChange={handleInputChange} />
        <FormField label="Attendance" id="attendance" name="attendance" value={attendance} onChange={handleInputChange} />
        <FormField label="Average" id="average" name="average" value={average} onChange={handleInputChange} />
        <Button>Add</Button>
      </Wrapper>
    </>
  );
};

Form.propTypes = {
  formValues: PropTypes.shape({
    name: PropTypes.string,
    attendance: PropTypes.string,
    average: PropTypes.string,
  }),
};

export default Form;
