import React, { useState, useEffect } from 'react';
import faker from 'faker';

import SearchBar from './components/SearchBar';
import FlagCard from './components/FlagCard';

const App = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    const newUsers = [];
    while (newUsers.length < 10) {
      const user = {
        email: faker.internet.email(),
        jobTitle: faker.name.jobTitle(),
        avatar: faker.internet.avatar(),
        content: faker.lorem.paragraph(),
        countryCode: faker.address.countryCode(),
      }
      newUsers.push(user);
    }

    setUsers(newUsers);
    setFilteredUsers([newUsers[0]]);
  }, []);

  console.log(users, 'users');

  return <div className="ui container" style={{ paddingTop: '20px' }}>
    <SearchBar style={{ marginBottom: '20px' }} />

    {
      !filteredUsers || !filteredUsers.length ?
      <b>No Results</b> :
      <div className="ui cards">
        <FlagCard />
        <FlagCard />
        <FlagCard />
      </div>
    }

  </div>
};

export default App;
