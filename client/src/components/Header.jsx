import React from 'react';

class Header extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1 id='header'> 
          Tango for Dummies 
        </h1>
        <img src='https://drive.google.com/uc?export=download&id=0BzybsaJP9M7MZGFQeUlMVHpsNVk' width='60%' height='60%'/>
      </div>
    )
  }
}

export default Header;