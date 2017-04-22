//import Go from 'gojs';
import React from 'react';
import _ from 'underscore';

import Header from './Header';
import Menu from './Menu'; 
import moves from './moves.json';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0
    }
    this.imgChange = this.imgChange.bind(this);
  }

  imgChange(){
    //set the value key of this.state to new value
    this.setState({value: document.getElementById("menu").value});
    console.log('imgChange is being invoked, state.value = ', this.state.value)
  }

  render() {
    return (
      <div>
        <Header />
          <div>
            <hr />
            <Menu moves={moves} imgChange={this.imgChange}/>
            <hr />
            <img src={(_.find(moves, (obj) => (obj.id == this.state.value)))['url']} />
            <hr />
            
          </div>
      </div>
    )
  }
}

export default App; 