import React from 'react';

class Textboxes extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      boxName: "move name here",
      boxURL: "url here"
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleURLChange = this.handleURLChange.bind(this);
  }

  handleNameChange () {
    this.setState({boxName: event.target.value})
  }

  handleURLChange () {
    this.setState({boxURL: event.target.value})
  }


  render() {
    return (
      <div>
        <p id='textBoxDesc'>Add your favorite tango move to the library below</p>
        <br/>
        <br/>
        <div >
          Technique name: <input type="text" id="boxName" defaultValue="move name here" onChange={this.handleNameChange}/><br/>
          Move picture url: <input type="url" id="boxURL" defaultValue="url here" onChange={this.handleURLChange}/><br/>
          <br/>
          <button onClick={(e)=>(this.props.addAMove(e))}>Submit Your Favorite Move!</button>
        </div>
      </div>
    )
  }
}

export default Textboxes;