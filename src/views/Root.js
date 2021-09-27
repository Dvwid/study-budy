import React, { useState, useEffect } from 'react';
import UsersList from '../components/organisms/UsersList/UsersList';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../assets/styles/GlobalStyle';
import { theme } from '../assets/styles/theme';
import { Wrapper, Nav } from './Root.styles';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Form from '../components/organisms/Form/Form';
import { users as usersData } from '../data/users';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
};
const mockAPI = (success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usersData) {
        resolve([...usersData]);
      } else {
        reject({ message: 'Error' });
      }
    }, 2000);
  });
};

const Root = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoadingState] = useState([]);
  const [formValues, setFormValues] = useState(initialFormState);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    console.log(filteredUsers);
    setUsers(filteredUsers);
  };

  useEffect(() => {
    setLoadingState(true);
    mockAPI()
      .then((data) => {
        setLoadingState(false);
        setUsers(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleInputChange = (e) => {
    console.log(formValues);

    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average,
    };

    setUsers([newUser, ...users]);

    setFormValues(initialFormState);
  };
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <Wrapper>
          <Nav>
            <div>
              <h1>Studdy Buddy</h1>
            </div>
            <Link to="/">Dashboard</Link>
            <Link to="/settings">Settings</Link>
            <Link to="/add-user">Add user</Link>
            <Link to="/add-user">Logout</Link>
          </Nav>
          <Switch>
            <Route path="/add-user">
              <Form formValues={formValues} handleAddUser={handleAddUser} handleInputChange={handleInputChange} />
            </Route>
            <Route path="/" exact>
              <UsersList deleteUser={deleteUser} users={users} />
            </Route>
          </Switch>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
