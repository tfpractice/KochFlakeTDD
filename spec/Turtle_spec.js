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

        it('initializes with a startPoint vector', function() {
            expect(myTurtle.startPoint).toEqual([50, 60]);

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
        it('initializes with an empty array of points', function() {
            expect(myTurtle.points).toEqual([
                [50, 60]
            ]);

        });

        describe('generator dependent variables', function() {
            it('initializes with a startString', function() {
                expect(myTurtle.string).toBe(myGen.startString);
            });
            it('initializes with an mFactor', function() {
                expect(myTurtle.mFactor).toBe(1 / 3);
            });
            it('initializes with a baseAngle', function() {
                expect(myTurtle.baseAngle).toBe(myGen.baseAngle);
            });

        });
    });

    describe('#moveForward', function() {
        it('chnages the position of the turtle based on magnitude and heading', function() {
            myTurtle.moveForward(myTurtle.startPoint);
            expect(myTurtle.position).toEqual([150, 60]);
        });

    });

    describe('#turnLeft', function() {
        it('increments the heading by the baseAngle', function() {
            myTurtle.turnLeft();
            expect(myTurtle.heading).toEqual(Math.PI / 3);
        });

    });

    describe('#turnRight', function() {
        it('decrements the heading by the baseAngle', function() {
            myTurtle.turnRight();
            myTurtle.turnRight();
            expect(myTurtle.heading).toEqual(-1 * (Math.PI / 3));
        });

    });
    describe('#getPoints', function() {
        it('converts the string attribute into a series of points via movements', function() {
            myTurtle.getPoints();
            expect(myTurtle.points.length).toEqual(5);

        });
    });
    describe('#incrementDepth', function() {
        it('increments the depth attribute by an integer amount', function() {
            myTurtle.incrementDepth(1);
            expect(myTurtle.depth).toEqual(1);

        });
    });

    describe('#getStringAtDepth', function() {
        it('retrieves new string from generator based on depth argument', function() {
            myTurtle.getStringAtDepth(2);
            expect(myTurtle.string).toEqual("a+a--a+a+a+a--a+a--a+a--a+a+a+a--a+a--a+a--a+a+a+a--a+a--a+a--a+a+a+a--a+a--a+a--a+a+a+a--a+a--a+a--a+a+a+a--a+a--");
        });
        it('increments the depth attribute by depth argument', function() {
            expect(myTurtle.depth).toEqual(3);

        });
    });

    // describe('#visualize', function() {
    // 	it('produces an SVG visualization of the screen', function() {
    // 		//not sure how to check d3js svg objects
    // 	});
    // });
});