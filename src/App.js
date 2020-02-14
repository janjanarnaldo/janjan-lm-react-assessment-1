import React, { useState, useEffect } from 'react';
import faker from 'faker';

const App = () => {
  const [users, setUsers] = useState([]);

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

  console.log(users, 'users');

  return <div>Arjan Pogi</div>
};

export default App;
