var canvas = document.getElementById("canvas");
var create = document.getElementById("create");

var sat = [1000,1200,1400, 1430, 1490, 1500, 1540, 1580, 1600];
var gpa = [75, 80, 83, 88, 85, 92, 96, 95, 99];

var draw = function(){
    var i;
    for (i = 0; i < 9; i++){
	var coord = document.createElementNS("http://www.w3.org/2000/svg","circle");
	coord.setAttribute("r", 4);
	coord.setAttribute("fill", "black");
	canvas.appendChild(coord);
    }
    var coords = d3.selectAll("circle");
    coords.data(sat);
    coords.attr("cx", function(d){return (d/1600)*400+50});
    coords.data(gpa);
    coords.attr("cy", function(d){return (d/100)*(-400)+450});
}

create.addEventListener("click",draw);
