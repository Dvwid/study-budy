import React, { useState, useEffect } from 'react';

import { Button } from '../../atoms/Button/Button';
import FormField from '../../molecules/FormField/FormField';
import UsersListItem from '../../molecules/UsersListItem/UsersListItem';
import { Wrapper } from '../../organisms/UsersList/UsersList.styles';

const UsersList = ({ deleteUser, users }) => {
  return (
    <>
      <Wrapper>
        <ul>
          {users.map((userData, index) => (
            <UsersListItem deleteUser={deleteUser} userData={userData} index={index} />
          ))}
        </ul>
      </Wrapper>
    </>
  );
};

export default UsersList;
