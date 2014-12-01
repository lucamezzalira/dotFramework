/**
 * Created by mezzalab2013 on 07/11/14.
 */
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