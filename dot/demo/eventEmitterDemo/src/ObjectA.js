/**
 * Created by mezzalab2013 on 07/11/14.
 */
/**
 * Created by mezzalab2013 on 07/11/14.
 */
var ObjectA = function(_emitter){

    var _eventEmitter = _emitter;
    var _evtToListen = new TestEvent();

    function _emitFirstEvt(){
        _eventEmitter.emit(_evtToListen, "hola!");
    }

    return{
        emitEvent1: _emitFirstEvt
    }

}