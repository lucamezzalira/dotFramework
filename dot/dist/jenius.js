/*  - jenius v1.0.0 - 2014-12-01 - website: www.jenius.io - email: mezzalab@gmail.com */var jenius = jenius || {};(function(){jenius.Event = function(_type){

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
jenius.Model = function(_reference){

    var _id = String(new Date().getTime()) + String(Math.random());
    var _nameReference = _reference || _id;

    function _reset(){
    }

    function _dispose(){
    }

    return {
        id: _id,
        nameReference: _nameReference,
        dispose: _dispose,
        reset: _reset
    };

};
jenius.ModelFacade = (function () {

    var _models = {};

    function _createModel(_modelModule, _args) {
        if(!_modelModule instanceof Model){
            throw new Error("ModelFacade accepts to create only objects that extends Model base class!");
        }

        var model = new _modelModule(_args);
        _models[model.nameReference] = model;
        return model;
    }

    function _getModelByName(_modelName) {
        return _models[_modelName];
    }

    function _getModelById(_modelId) {
        var tmpModel, i;
        for(i in _models){
            if(_models[i].id === _modelId)
                tmpModel = _models[i];
        }
        return tmpModel;
    }

    return {
        addModel: _createModel,
        getModelByName: _getModelByName,
        getModelById: _getModelById
    };
}());
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
jenius.Proxy = function(_url, _method, _successHandler, _errorHandler){

    var _status, _data;
    var _id = String(new Date().getTime()) + String(Math.random());
    var _xhr = new XMLHttpRequest();
    _xhr.onreadystatechange = function(){

        if (_xhr.readyState === 4) {
            _status = _xhr.status;
            if (_status === 200) {
                _data = _xhr.responseText;
                if(_successHandler){
                    _successHandler(_data);
                }
            } else {
                if(_errorHandler){
                    _errorHandler(_status);
                } else {
                    console.log("Error to retrieve data from " + _url + ", error code:" + _status);
                }
            }
        }
    };

    function _sendCall(_dataToSend){
        _xhr.open(_method, _url, true);
        _xhr.send(_dataToSend);
    }

    function _addHeader(_name, _value){
        _xhr.setRequestHeader(_name, _value);
    }

    function _getData(){
        return _data;
    }

    return{
        call: _sendCall,
        addHeader: _addHeader,
        id: _id,
        getData: _getData
    };

};
jenius.Composition = (function(){

    function _mixin(_source, _target){
        _source.call(_target);
    }

    return{
        mixin: _mixin
    };

}());
jenius.EventEmitter = (function(){

    var eventsArray = [];

    function _on(_event, _callBack){
        _addEvent(_event, _callBack, false);
    }

    function _onOnce(_event, _callBack){
        _addEvent(_event, _callBack, true);
    }

    function _addEvent(_event, _callBack, _isOnce){
        if(typeof _callBack === "function"){
            eventsArray.push({evt: _event, clb: _callBack, isOnce: _isOnce});
        } else {
            throw new Error("callback must be a function!");
        }
    }

    function _off(_event){
        var tmpArr = eventsArray;
        eventsArray = tmpArr.filter(function(currentValue){
            if(currentValue.evt.id !== _event.id){
                return currentValue;
            }
        });
    }

    function _reset(){
        eventsArray = [];
    }

    function _emit(_event, _arguments){
        var scope = this;
        eventsArray.map(function(currentValue){
            if(currentValue.evt.type === _event.type){
                currentValue.clb(_arguments);
                if(currentValue.isOnce === true){
                    scope.off(currentValue.evt);
                }
            }

        });

    }

    return {
        on: _on,
        onOnce: _onOnce,
        off: _off,
        reset: _reset,
        emit: _emit
    };

}());

jenius.LocalStorage = function(){

    function _isActive(){
         return (typeof(Storage) !== "undefined");
    }

    function _setData(_id, _data){
        localStorage.setItem(_id, _data);
    }

    function _getData(_id){
        return localStorage.getItem(_id);
    }

    function _removeData(_id){
        localStorage.removeItem(_id);
    }

    function _removeAllData(){
        localStorage.clear();
    }

    return{
        isActive: _isActive,
        setData: _setData,
        getData: _getData,
        removeData: _removeData,
        removeAllData: _removeAllData
    };

};
jenius.View = function(){

    var _id = String(new Date().getTime()) + String(Math.random());

    function _resize(){
    }

    function _dispose(){
    }

    return {
        id: _id,
        dispose: _dispose,
        resize: _resize
    };

};}())
//# sourceMappingURL=jenius.js.map