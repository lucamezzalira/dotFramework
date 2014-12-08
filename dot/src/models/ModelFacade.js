/**
 * Created by mezzalab2013 on 07/11/14.
 */
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