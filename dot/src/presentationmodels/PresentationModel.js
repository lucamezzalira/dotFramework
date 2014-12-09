/**
 * Created by mezzalab2013 on 14/11/14.
 */
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