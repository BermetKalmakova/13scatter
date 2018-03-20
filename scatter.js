var canvas = document.getElementById("canvas");

var sat = [1430, 1440, 1450, 1490, 1500, 1520, 1530, 1540, 1560, 1560, 1570, 1580, 1590, 1590, 1600, 1600, 1600];
var gpa = [94.42, 94.95, 93.61, 95.42, 93.26, 96.3, 96.31, 96.92, 97.37, 96.02, 96.88, 96.73, 97.78, 95.62, 97.37, 96.29, 95.98];

var draw = function(){
    var i;
    for (i = 0; i < sat.length; i++){
	var coord = document.createElementNS("http://www.w3.org/2000/svg","circle");
	coord.setAttribute("r", 3);
	coord.setAttribute("fill", "black");
	canvas.appendChild(coord);
    }
    var coords = d3.selectAll("circle");
    coords.data(sat);
    coords.attr("cx", function(d){return ((d-800)/800)*400+50});
    coords.data(gpa);
    coords.attr("cy", function(d){return ((d-50)/50)*(-400)+450});
}

draw()
