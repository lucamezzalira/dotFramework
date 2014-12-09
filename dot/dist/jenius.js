/*  - jenius v1.0.0 - 2014-12-09 - website: www.jenius.io - email: mezzalab@gmail.com */var jenius = jenius || {};(function(){(function(jenius){

    function Event(_type) {
        var _eventType = _type;
        var _id = String(new Date().getTime()) + String(Math.random());

        if (_eventType === null) {
            throw new Error("Specify an event type when you instantiate an event!");
        }

        return {
            id: _id,
            type: _eventType
        };
    }

    jenius.Event = Event;

}(jenius || {}));
(function(jenius){
    function Model(_reference) {
        var _id = String(new Date().getTime()) + String(Math.random());
        var _nameReference = _reference || _id;

        function _reset() {
        }

        function _dispose() {
        }

        return {
            id: _id,
            nameReference: _nameReference,
            dispose: _dispose,
            reset: _reset
        };
    }

    jenius.Model = Model;
}(jenius || {}));
(function (jenius) {
    function ModelFacade() {
        var _models = {};

        function _createModel(_modelModule, _args) {
            if (!_modelModule instanceof jenius.Model) {
                throw new Error("ModelFacade accepts to create only objects that extends Model base class!");
            }

            var model = new _modelModule(_args);
            _models[model.nameReference] = model;
            return model;
        }

        function _getModelByName(_modelNameReference) {
            return _models[_modelNameReference];
        }

        function _getModelById(_modelId) {
            var tmpModel, i;
            for (i in _models) {
                if (_models[i].id === _modelId) {
                    tmpModel = _models[i];
                }
            }
            return tmpModel;
        }

        function _resetAll() {
            _models = {};
        }

        return {
            addModel: _createModel,
            getModelByName: _getModelByName,
            getModelById: _getModelById,
            resetAll: _resetAll
        };
    }

    jenius.ModelFacade = new ModelFacade();

}(jenius || {}));
(function(jenius){
    function PresentationModel(view) {

        if (!view instanceof jenius.View) {
            throw new Error("PresentationModel accepts to manage only objects that extends View base class!");
        }

        var _view = view;
        var _id = String(new Date().getTime()) + String(Math.random());

        function _dispose() {
        }

        return {
            id: _id,
            view: _view,
            emitter: jenius.EventEmitter,
            modelFacade: jenius.ModelFacade,
            dispose: _dispose
        };
    }

    jenius.PresentationModel = PresentationModel;

}(jenius || {}));
(function(jenius){
    function Proxy(_url, _method, _successHandler, _errorHandler) {
        var _status, _data;
        var _id = String(new Date().getTime()) + String(Math.random());
        var _xhr = new XMLHttpRequest();
        _xhr.onreadystatechange = function () {
            if (_xhr.readyState === 4) {
                _resultCall();
            }
        };

        function _resultCall() {
            _status = _xhr.status;
            if (_status === 200) {
                _data = _xhr.responseText;
                _onSuccess();
            } else {
                _onError();
            }
        }

        function _onSuccess() {
            try {
                _successHandler(_data);
            } catch (e) {
                throw new Error("Success callback not defined inside your proxy instance!");
            }
        }

        function _onError() {
            try {
                _errorHandler(_status);
            } catch (e) {
                console.log("Error to retrieve data from " + _url + ", error code:" + _status);
            }
        }

        function _sendCall(_dataToSend) {
            _xhr.open(_method, _url, true);
            _xhr.send(_dataToSend);
        }

        function _addHeader(_name, _value) {
            _xhr.setRequestHeader(_name, _value);
        }

        function _getData() {
            return _data;
        }

        return {
            call: _sendCall,
            addHeader: _addHeader,
            id: _id,
            getData: _getData
        };
    }

    jenius.Proxy = Proxy;

}(jenius || {}));
(function(jenius){
    function Composition() {

        function _mixin(_source, _target) {
           return _source.call(_target);
        }

        return {
            mixin: _mixin
        };
    }

    jenius.Composition = new Composition();
}(jenius || {}));
 (function(jenius){
    function EventEmitter() {

        var eventsArray = [];

        function _on(_event, _callBack) {
            _addEvent(_event, _callBack, false);
        }

        function _onOnce(_event, _callBack) {
            _addEvent(_event, _callBack, true);
        }

        function _addEvent(_event, _callBack, _isOnce) {
            if (typeof _callBack !== "function") {
                throw new Error("callback must be a function!");
            }

            eventsArray.push({evt: _event, clb: _callBack, isOnce: _isOnce});
        }

        function _off(_event) {
            var tmpArr = eventsArray;
            eventsArray = tmpArr.filter(function (currentValue) {
                if (currentValue.evt.id !== _event.id) {
                    return currentValue;
                }
            });
        }

        function _reset() {
            eventsArray = [];
        }

        function _emit(_event, _arguments) {
            var scope = this;
            eventsArray.map(function (currentValue) {
                if (currentValue.evt.type === _event.type) {
                    currentValue.clb(_arguments);
                    if (currentValue.isOnce) {
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
    }

     jenius.EventEmitter = new EventEmitter();

}(jenius || {}));

(function(jenius){
    function LocalStorage() {

        function _isActive() {
            return (typeof(Storage) !== "undefined");
        }

        function _setData(_id, _data) {
            localStorage.setItem(_id, _data);
        }

        function _getData(_id) {
            return localStorage.getItem(_id);
        }

        function _removeData(_id) {
            localStorage.removeItem(_id);
        }

        function _removeAllData() {
            localStorage.clear();
        }

        return {
            isActive: _isActive,
            setData: _setData,
            getData: _getData,
            removeData: _removeData,
            removeAllData: _removeAllData
        };
    }

    jenius.LocalStorage = LocalStorage;

}(jenius || {}));
(function(jenius){
    function View(_stage) {
        var _id = String(new Date().getTime()) + String(Math.random());

        function _resize() {
        }

        function _dispose() {
        }

        return {
            id: _id,
            dispose: _dispose,
            resize: _resize
        };
    }

    jenius.View = View;

}(jenius || {}));}());
//# sourceMappingURL=jenius.js.map