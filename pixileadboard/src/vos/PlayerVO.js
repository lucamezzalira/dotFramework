/**
 * Created by mezzalab2013 on 08/12/14.
 */
(function(LEADBOARD){
    function PlayerVO(){
        var _scope = Object.create(null);

        _scope.username = "";
        _scope.points = 0;
        _scope.level = 1;

        return _scope;
    }

    LEADBOARD.PlayerVO = PlayerVO;

}(LEADBOARD || {}))