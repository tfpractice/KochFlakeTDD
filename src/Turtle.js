function Turtle(sx, sy, sDirection, sMag, sGen) {
    this.sx = sx;
    this.sy = sy;
    this.heading = sDirection;
    this.magnitude = sMag;
    this.generator = sGen;
    this.string = this.generator.startString;
    this.mFactor = this.generator.mFactor;
    this.baseAngle = this.generator.baseAngle;
    this.depth = 0;
    this.points = [];
    this.startPoint = [this.sx, this.sy];
    this.points.push(this.startPoint);
    this.position = this.startPoint;
    this.getPoints();
}

Turtle.prototype.turnLeft = function() {
    this.heading += this.baseAngle;
};

Turtle.prototype.turnRight = function() {
    this.heading -= this.baseAngle;
};

Turtle.prototype.moveForward = function(point) {
    var coefficient = Math.pow(this.mFactor, this.depth);
    var newMag = coefficient * this.magnitude;
    var xVector = newMag * Math.cos(this.heading);
    var yVector = newMag * Math.sin(this.heading);
    // var xVal = point[0] + xVector;
    // var yVal = point[1] + yVector;
    var xVal = this.position[0] + xVector;
    var yVal = this.position[1] + yVector;

    var newPoint = [xVal, yVal];
    this.points.push(newPoint);
    this.position = newPoint;

};
Turtle.prototype.getPoints = function() {
    var splitString = this.string.split("");
    splitString.forEach(function(el, id, arr) {
        if (el == "a") {
            this.moveForward(this.position);
        } else if (el == "-") {
            this.turnLeft();
        } else if (el == "+") {
            this.turnRight();
        }
    }, this);

    console.log(this.points);
};

Turtle.prototype.incrementDepth = function(delta) {
    this.depth += delta;
};

Turtle.prototype.getStringAtDepth = function(d) {
    this.string = this.generator.genString(this.string, d);
    this.incrementDepth(d);

};

Turtle.prototype.visualize = function(selector) {
    d3.selectAll("svg").remove();
    this.getPoints();
    var container = d3.select(selector).append('svg')
    	.classed("kochLine", true)
        .attr({
            width: '1000',
            height: '1000'
        });

    var lineFunction = d3.svg.line()
        .x(function(d) {
            return d[0];
        })
        .y(function(d) {
            return d[1];
        })
        .interpolate("linear");

    this.visualization = container.append('path')
        .attr("d", lineFunction(this.points))
        .attr('stroke', '#ff00ff');

                

};