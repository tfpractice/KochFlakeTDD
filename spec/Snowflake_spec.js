describe('snowflake', function() {
    var myGen = new Snowflake();

    describe('init/construction', function() {
        it('initializes with an initiator morpheme', function() {
            expect(myGen.initiator).toBe("a");
        });
        it('initializes with a start string', function() {
            expect(myGen.startString).toBe("a--a--a--");
        });
        it('initializes with a generator string', function() {
            expect(myGen.generator).toBe("a+a--a+a");
        });
        it('initializes with a baseAngle', function() {
            expect(myGen.baseAngle).toBe(Math.PI / 3);
        });
        it('initializes with a mFactor', function() {
            expect(myGen.mFactor).toBe(1 / 3);
        });
    });
    describe('splitString', function() {
        it('creates a split version of the passed string', function() {
            expect(myGen.splitString(myGen.startString)).toContain("a", "-", "-", "a", "-", "-", "a", "-", "-");

        });
    });
    describe('#genNextString', function() {

        it('alters an input string according to snowflake generator', function() {
            expect(myGen.genNextString(myGen.startString)).toBe("a+a--a+a--a+a--a+a--a+a--a+a--")


        });
    });



      describe('#genString', function() {

        it('returns an altered string agiven number of times', function() {
            // expect(myGen.genString(myGen.startString, 1)).toBe("a+a--a+a--a+a--a+a--a+a--a+a--");
            expect(myGen.genString("a", 2)).toBe("a+a--a+a+a+a--a+a--a+a--a+a+a+a--a+a")


        });
    });
});