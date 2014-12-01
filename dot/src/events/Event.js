/**
 * Created by mezzalab2013 on 07/11/14.
 */
jenius.Event = function(_type){

    var _eventType = _type;
    var _id = String(new Date().getTime()) + String(Math.random());

    if(_eventType === null){
        throw new Error("Specify an event type when you instantiate an event!");
    }

    return{
        id: _id,
        type: _eventType
    };
};