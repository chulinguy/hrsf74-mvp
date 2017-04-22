import React from 'react';

class Header extends React.Component {
  constructor (props) {
    super(props);
  }

  //TODO: refactor to put link on Google driver 
  render() {
    return (
      <div>
        <h1 id='header'> 
          Tango for Dummies 
        </h1>
        <img src='/client/Tango_for_dummies.jpg' width='60%' height='60%'/>
      </div>
    )
  }
}

export default Header;