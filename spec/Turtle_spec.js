describe('Turtle', function() {

    var myGen = new Snowflake();
    var myTurtle = new Turtle(50, 60, 0, 100, myGen);

    describe('init/constructor', function() {
        it('initializes with a start x position', function() {
            expect(myTurtle.sx).toBe(50);

        });
        it('initializes with a startY position', function() {
            expect(myTurtle.sy).toBe(60);

        });
        it('initializes with a start direction ', function() {
            expect(myTurtle.heading).toBe(0);

        });
        it('initializes with a starting magnitude', function() {
            expect(myTurtle.magnitude).toBe(100);

        });
        it('initializes with a depth of 0', function() {
        		expect(myTurtle.depth).toBe(0);
        	});
        it('initializes with a generator', function() {
            expect(myTurtle.generator).toBe(myGen);

        });

        describe('generator dependent variables', function() {
        	it('initializes with a startString', function() {
        		expect(myTurtle.string).toBe(myGen.startString);
        	});
        	it('initializes with an mFactor', function() {
        		expect(myTurtle.mFactor).toBe(1/3);
        	});
        	it('initializes with a baseAngle', function() {
        		expect(myTurtle.baseAngle).toBe(myGen.baseAngle);
        	});
        	
        });
    });
});