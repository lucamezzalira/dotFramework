/**
 * Created by mezzalab2013 on 09/12/14.
 */
(function(LEADBOARD){
    function LeadboardPM(view){
        var _scope = jenius.Composition.mixin(jenius.PresentationModel, LEADBOARD.LeadboardPM);
        var _model, _view;

        function init(){
            _view = view;
            _model = _scope.modelFacade().addModel(LEADBOARD.LeadboardModel);

            _scope.emitter().on("PlayersListReady", _popolateView);

           _view.init();

           var p = new LEADBOARD.LeaderboardProxy();
           p.loadData();
        }

        function _popolateView(_data){
            _view.createList(_data);
        }

        init();

        return _scope;
    }
    LEADBOARD.LeadboardPM = LeadboardPM;
}(LEADBOARD || {}))