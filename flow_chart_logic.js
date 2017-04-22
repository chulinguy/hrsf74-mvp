function init() {
  var $ = go.GraphObject.make;  // for conciseness in defining templates

  var myDiagram =
    $(go.Diagram, "myDiagramDiv",  // must name or refer to the DIV HTML element
      {
        // start everything in the middle of the viewport
        initialContentAlignment: go.Spot.Center,   
      });
    

    myDiagram.nodeTemplate =
      $(go.Node, "Auto",
        new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
        // define the node's outer shape, which will surround the TextBlock
        $(go.Shape, "RoundedRectangle",
          {
            parameter1: 20,  // the corner has a large radius
            fill: $(go.Brush, "Linear", { 0: "rgb(254, 201, 0)", 1: "rgb(254, 162, 0)" }),
            stroke: null,
            portId: "",  // this Shape is the Node's port, not the whole Node
            fromLinkable: true, fromLinkableSelfNode: true, fromLinkableDuplicates: true,
            toLinkable: true, toLinkableSelfNode: true, toLinkableDuplicates: true,
            cursor: "pointer",
            click: function(){

            }
            //TODO: NEED A FUNCTION
          }
        ),

        $(go.TextBlock,
          {
            font: "bold 11pt helvetica, bold arial, sans-serif",
            editable: false  
          },
          new go.Binding("text").makeTwoWay()
        )
      )


    myDiagram.nodeTemplate.selectionAdornmentTemplate =
    $(go.Adornment, "Spot",
      $(go.Panel, "Auto",
        $(go.Shape, { fill: null, stroke: "blue", strokeWidth: 2 }),
        $(go.Placeholder)  // a Placeholder sizes itself to the selected Node
      ) 
    ); // end Adornment
}