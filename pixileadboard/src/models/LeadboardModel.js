/**
 * Created by mezzalab2013 on 08/12/14.
 */
(function(LEADBOARD){
    function LeadboardModel(){
        var _scope = jenius.Composition.mixin(jenius.Model, LEADBOARD.LeadboardModel);
        var _players = [];
        var TOTAL_PLAYERS = 10;

        function _popolate(){
            var i = 0;
            var tmpPlayer;
            for(i; i < TOTAL_PLAYERS; i++){
                tmpPlayer = new LEADBOARD.PlayerVO();
                tmpPlayer.name = "PlayerName_" + i.toString();
                tmpPlayer.points = Math.round(Math.random() * 5000);
                tmpPlayer.level = Math.round(Math.random() * 5);
                _players.push(tmpPlayer);
            }
        }

        _scope.getPlayersList = function(){
            return _players.sort(function(a, b){
                return a.points < b.points;
            });
        }

        _popolate();

        return _scope;
    }

    LEADBOARD.LeadboardModel = LeadboardModel;

}(LEADBOARD || {}))