/**
 * Created by mezzalab2013 on 08/12/14.
 */
(function(LEADBOARD){
    function LeadboardModel(){
        var _scope = jenius.Composition.mixin(jenius.Model, LEADBOARD.LeadboardModel);
        var _players = [];

        _scope.getPlayersList = function(){
            return _players.sort(function(a, b){
                return a.points < b.points;
            });
        }

        return _scope;
    }

    LEADBOARD.LeadboardModel = LeadboardModel;

}(LEADBOARD || {}))