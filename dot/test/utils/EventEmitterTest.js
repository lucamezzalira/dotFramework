describe("EventEmitter test suite", function(){
    //var expect = chai;
    var emitter = new EventEmitter();

    describe("EventEmitter setup", function(){

        it("should not be undefined", function(){
         //   expect(EventEmitter).not.to.be(undefined);
        });

        it("should be an object", function(){
            console.dir(emitter);
          //  var emitter = new EventEmitter();
        //    expect(emitter).to.be.an('object');
        });

    });

    describe("EventEmitter tear down", function(){

    });

    describe("testing event flow", function(){

        before(function(){
            GLOBAL.emitter = EventEmitter;
        });

        it("should listen for an event", function(){
        });
    });
});
