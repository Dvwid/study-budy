import React from 'react';
import { users } from '../../../data/users';
import UsersListItem from '../../molecules/UsersListItem/UsersListItem';
import { Wrapper } from '../../organisms/UsersList/UsersList.styles';

const UsersList = () => (
  <Wrapper>
    <ul>
      {users.map((userData, index) => (
        <UsersListItem userData={userData} index={index} />
      ))}
    </ul>
  </Wrapper>
);

export default UsersList;
