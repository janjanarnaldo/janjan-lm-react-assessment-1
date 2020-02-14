import React, { Fragment, useState, useEffect, useRef } from 'react';
import faker from 'faker';

import Spinner from './Spinner';
import SearchBar from './SearchBar';
import FlagCard from './FlagCard';

const App = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const refSearchInput = useRef(null);

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
  }, []);

  // Just to display the users for 1 time only
  useEffect(() => {
    console.log(users, 'users');
  }, [users]);

  const renderFlagCard = user => <FlagCard key={user.email} {...user} />

  const onSearchUsers = () => {
    const { current: { value: search } } = refSearchInput;

    setIsLoading(true);
    setTimeout(() => {
      setFilteredUsers(users.filter(user => user.email.toLowerCase().includes(search.toLowerCase())));
      setIsLoading(false);
    }, 1000);
  }

  return <Fragment>
    <Spinner isLoading={isLoading} />

    <div className="ui container" style={{ paddingTop: '20px' }}>
      <SearchBar style={{ marginBottom: '20px' }} _ref={refSearchInput} action={onSearchUsers} />
      {
        !filteredUsers || !filteredUsers.length ?
        <b>No Results</b> :
        <div className="ui cards">{filteredUsers.map(renderFlagCard)}</div>
      }
    </div>
  </Fragment>
};

export default App;
