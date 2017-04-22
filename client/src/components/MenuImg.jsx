import React from 'react';


class MenuImg extends React.Component {
  constructor (props){
    super(props);
  }

  render() {
    return (
      <div>
        {console.log(JSON.stringify(this.props.moves))}
        <select>
          {this.props.moves.map((item) =>(<option key={item.name}>{item.name}</option>))}
        </select>
      </div>
    )
  }
}

export default MenuImg;