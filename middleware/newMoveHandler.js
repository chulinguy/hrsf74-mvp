var moves = require('../client/src/components/moves.json');
var fs = require('fs');
var _ = require('underscore');

var newMoveHandler = function (req, res, next){

  console.log('server side hears post request to add new move');
  
    var newMove = req.body; 
    newMove.id = moves.length;
    console.log('newMove is', newMove)
    
    fs.readFile('./client/src/components/moves.json', function(err, fileData){
      if (err) throw err;
      var fileDataArr = JSON.parse(fileData);
      if (_.find(fileDataArr, function(obj){
        return obj['name'] == newMove.name
      })){
        res.end('move already exists!')
      }
      var newFile = fileData.slice(0,-1) + ','+ JSON.stringify(newMove) + ']';
      fs.writeFile('./client/src/components/moves.json', newFile, (err)=>{
        if(err) throw err;
      }
      )
    })
    res.json(newMove.id);
    next();
  // })
}

module.exports = newMoveHandler; 