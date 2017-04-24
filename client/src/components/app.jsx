//import Go from 'gojs';
import React from 'react';
import _ from 'underscore';
import $ from 'jquery';

import Header from './Header';
import Menu from './Menu'; 
import Textboxes from './Textboxes';
import moves from './moves.json';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0
    }
    this.imgChange = this.imgChange.bind(this);
    this.addAMove = this.addAMove.bind(this);
    this.submitError = this.submitError.bind(this);
  }

  imgChange(){
    //set the value key of this.state to new value
    this.setState({value: $("#menu").val()});
    console.log('imgChange is invoked, state.value = ', this.state.value)
  }

  addAMove(e){
    
    var newMoveName = $("#boxName").val();
    var newMoveURL = $("#boxURL").val();
    console.log('addAMove is invoked, newMoveName =', newMoveName);
    if (newMoveName === 'move name here' || ''){
      this.submitError();
    } else if (newMoveURL === 'url here' || ''){
      this.submitError();
    } else {
      var data = JSON.stringify({"name": newMoveName, "url": newMoveURL});
      console.log('submitting a new move')
      $.ajax({
        method: 'POST',
        url: 'http://127.0.0.1:3000/newMove',
        dataType: 'json',
        contentType: "application/json",
        data: data,
        success: function(res){
          alert('Refresh page to see ', newMoveName,' added to the drop down menu')
          
      // alert('A new move was submitted: ' + newMoveName);
        }  
      })
    }
  }
  

  submitError() {
    console.log('submiterror is being invoked!')
    $("#textBoxDesc").text('Please enter a new move-url combination!');
  }


  render() {
    return (
      <div id='holder'>
        <Header />
        <img id='move' src={moves[this.state.value]['url']}/>
        <hr/>
        <Menu id='menu' moves={moves} imgChange={this.imgChange}/>
        <Textboxes id='textboxes' addAMove={this.addAMove}/>
      
      </div>
    )
  }
}

export default App; 