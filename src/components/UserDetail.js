import React from 'react';

const UserDetail = ({ email, jobTitle, avatar }) => {
  return <div className="content">
    <img className="right floated ui avatar image" alt='avatar' src={avatar}></img>
    <div className="header"><b>{email}</b></div>
    <div className="meta">{jobTitle}</div>
  </div>;
}

export default UserDetail;
