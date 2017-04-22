//import Go from 'gojs';
import React from 'react';

import Header from './Header';
import MenuImg from './MenuImg'; 
import moves from './moves.json';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //TODO: do I need load something here?
    }
  }

  render() {
    return (
      <div>
        <Header />
          <div>
            <hr />
            <MenuImg moves={moves}/>
          </div>
      </div>
    )
  }
}

export default App; 