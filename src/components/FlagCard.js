import React from 'react';

import UserDetail from './UserDetail';

const FlagCard = ({ email, jobTitle, avatar, content, countryCode }) => {
  const flagUrl = `https://www.countryflags.io/${countryCode}/flat/64.png`;

  return <div className="ui card">
    <div className="content">
      <UserDetail email={email} jobTitle={jobTitle} avatar={avatar}/>
    </div>
    <div className="content" style={{ display: 'inline-flex' }}>
      <div style={{ marginRight: '10px' }}>
        <img alt={countryCode} src={flagUrl} />
      </div>
      <div>{content}</div>
    </div>
  </div>;
}

export default FlagCard;
