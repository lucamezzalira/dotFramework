/**
 * Created by mezzalab2013 on 20/11/14.
 */
var TestEvent = function(){

    var _evt = new jenius.Event(TestEvent.TEST_EVENT);
    return _evt;

}

TestEvent.TEST_EVENT = "test-event";