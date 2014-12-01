/**
 * Created by mezzalab2013 on 07/11/14.
 */
var ObjectB = function(_emitter){

    var _eventEmitter = _emitter;
    var _evtToListen = new TestEvent();

    _eventEmitter.on(_evtToListen, function(_msg){
        console.log("ObjB listening to", _evtToListen.type, _evtToListen.id, _msg);
    })

    function _removeEvt(){
        _eventEmitter.off(_evtToListen);
    }

    return{
        removeEvent: _removeEvt
    }

}