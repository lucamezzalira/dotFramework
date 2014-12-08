/**
 * Created by mezzalab2013 on 14/11/14.
 */
(function(jenius){
    function PresentationModel(view) {

        if (!view instanceof jenius.View) {
            throw new Error("PresentationModel accepts to manage only objects that extends View base class!");
        }

        var _view = view;
        var _emitter = jenius.EventEmitter;
        var _modelFacade = jenius.ModelFacade;
        var _id = String(new Date().getTime()) + String(Math.random());

        function _dispose() {
        }

        function _getView() {
            return _view;
        }

        function _getModelFacade() {
            return _modelFacade;
        }

        function _getEmitter() {
            return _emitter;
        }

        return {
            id: _id,
            view: _getView,
            emitter: _getEmitter,
            modelFacade: _getModelFacade,
            dispose: _dispose
        };
    }

    jenius.PresentationModel = PresentationModel;

}(jenius || {}));