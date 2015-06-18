function Snowflake() {
    this.initiator = "a";
    this.startString = "a--a--a--";
    this.generator = "a+a--a+a";
    this.baseAngle = Math.PI / 3;
    this.mFactor = 1 / 3;
}
Snowflake.prototype.splitString = function(string) {
    return string.split("");
};
Snowflake.prototype.genNextString = function(iString) {
    var iString = iString,
        splitString = iString.split(""),
        oString = "";
    splitString.forEach(function(el, id, arr) {
        if (el == (this.initiator)) {
            console.log(el);
            oString += this.generator;
        } else if (typeof el == "string") {
            console.log(el);
            oString += el;
        };
    }, this);
    console.log(oString);
    return oString;
};
Snowflake.prototype.genString = function(iString, depth) {
    var iString = iString,
        splitString = iString.split(""),
        oString = "";
    for (var i = depth; i > 0; i--) {
        console.log(iString)
        iString = this.genNextString(iString);
        console.log(iString)
    };
    return iString;
};