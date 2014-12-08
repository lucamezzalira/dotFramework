/**
 * Created by mezzalab2013 on 20/11/14.
 */
/**
 * Created by mezzalab2013 on 07/11/14.
 */
var ObjectC = function(_emitter){

    var _eventEmitter = _emitter;

    var _evtToListen = new TestEvent();
    _eventEmitter.onOnce(_evtToListen, function(_msg){
        console.log("ObjC listening to", _evtToListen.type, _evtToListen.id, _msg);
    })

    function _removeEvt(){

        _eventEmitter.off(_evtToListen);

    }

    return{
        removeEvent: _removeEvt
    }

}