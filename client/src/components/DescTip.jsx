import React from 'react'

class DescTip extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <p id='moveDesc'>{this.props.moves.description}
    )
  }
} 