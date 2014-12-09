/**
 * Created by mezzalab2013 on 08/12/14.
 */
(function(LEADBOARD){
    function LeadboardView(_stage){
        var _scope = jenius.Composition.mixin(jenius.View, LEADBOARD.LeadboardView);
        var _title, _playerList;
        var _levelsColors = [0x11CCCC, 0x33CCCC, 0x55CCCC, 0x77CCCC, 0x99CCCC];

        function _setTitlePosition(){
            _title.x = Math.round(_stage.width - _title.width)/2;
            _title.y = 20;
        }

        function _createRow(_player){
            var container = new PIXI.DisplayObjectContainer();
            var bg = new PIXI.Graphics();
            bg.beginFill(_levelsColors[_player.level - 1], 1);
            bg.drawRoundedRect(0, 0, 500, 35, 8);
            bg.endFill();

            var str = _player.username + "    pts. " + _player.points + "   lvl. " + _player.level;
            var datafield = new PIXI.Text(str, {fill: "white"});

            datafield.y = (bg.height - datafield.height) / 2
            datafield.x = 5;

            container.addChild(bg);
            container.addChild(datafield);

            return container
        }

        _scope.init = function(){
            _title = new PIXI.Text("JENIUS LEADERBOARD", {font: "bold 44px Arial", dropShadow: true, fill: "#22CCCC"});
            _title.x = 10;
            _stage.addChild(_title);

            _playerList = new PIXI.DisplayObjectContainer();
            _playerList.y = _title.height + 20;
            _playerList.x = 10;
            _stage.addChild(_playerList);

            _setTitlePosition();
        }

        _scope.createList = function(_players){
            var i, tmpRow;
            var counter = 0;
            for(i in _players){
                tmpRow = _createRow(_players[i]);
                tmpRow.y = (tmpRow.height + 5) * counter;
                _playerList.addChild(tmpRow);
                counter++;
            }

            console.log("...", _playerList.height);
        }

        _scope.resize = function(){

        }

        _scope.dispose = function(){

        }

        return _scope;
    }

    LEADBOARD.LeadboardView = LeadboardView;
}(LEADBOARD || {}))