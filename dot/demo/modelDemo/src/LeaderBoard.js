/**
 * Created by mezzalab2013 on 20/11/14.
 */
var LeaderBoard = function(){
    var parent = Model();
    var _board = [];

    function _addScore(_user, _score){
        var tmpRow = Object.create(null);
        tmpRow.user = _user;
        tmpRow.score = _score;
        _board.push(tmpRow);
    }

    function _getList(){
        return _board;
    }

    function _getTotalScores(){
        return _board.length;
    }

    function _reset(){
        _board = [];
    }

    function _dispose(){
        _board = null;
    }

    return{
        id: parent.id,
        addScore: _addScore,
        getTotalScores: _getTotalScores,
        getList: _getList,
        reset: _reset,
        dispose: _dispose
    }
}