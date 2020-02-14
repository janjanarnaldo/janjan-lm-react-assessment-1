import React from 'react';

import UserDetail from './UserDetail';

const FlagCard = () => {
  return <div className="ui card">
    <div className="content">
      <UserDetail />
    </div>
    <div className="content">
      <img src="https://www.countryflags.io/AE/flat/64.png" />
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi ipsa expedita, necessitatibus voluptas, ad repudiandae quibusdam laboriosam rerum fugiat laborum ut, quaerat nihil. Possimus vero dolore nobis, qui perspiciatis veritatis.
    </div>
  </div>;
}

export default FlagCard;
