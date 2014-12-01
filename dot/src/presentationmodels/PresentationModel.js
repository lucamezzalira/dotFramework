/**
 * Created by mezzalab2013 on 14/11/14.
 */
jenius.PresentationModel = function(_view){

    var _view = _view;
    var _emitter = EventEmitter;
    var _modelFacade = ModelFacade;
    var _id = String(new Date().getTime()) + String(Math.random());

    function _dispose(){

    }

    return {
        id: _id,
        dispose: _dispose
    };

};