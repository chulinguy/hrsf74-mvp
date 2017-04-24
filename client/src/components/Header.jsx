import React from 'react';

class Header extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2 id='header'> 
          Tango for Dummies 
        </h2>
        <img id='flowchart' src='https://drive.google.com/uc?export=download&id=0BzybsaJP9M7MZGFQeUlMVHpsNVk' width='60%' height='60%'/>
      </div>
    )
  }
}

export default Header;