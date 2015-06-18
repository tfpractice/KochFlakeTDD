incluce

function Turtle (sx, sy, sDirection, sMag, sGen) {
	this.sx = sx;
	this.sy = sy;
	this.heading = sDirection;
	this.magnitude = sMag;
	this.generator = sGen;
	this.string = this.generator.startString;
	this.mFactor = this.generator.mFactor;
	this.baseAngle = this.generator.baseAngle;
	this.depth = 0;
}