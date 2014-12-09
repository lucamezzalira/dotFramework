(function(LEADBOARD){

	function LeaderboardProxy(){
		var _proxy;

		function _onError(e){
			console.log("ERROR! end point not found!");
		}

		function _onSuccess(e){
			var _players = JSON.parse(e);
			jenius.EventEmitter.emit("PlayersListReady", _players);
		}

		function _loadData(){
			_proxy = new jenius.Proxy("http://localhost/pixileadboard/data/playerlist.json", "GET", _onSuccess, _onError);
			_proxy.call();
		}

		return {
			loadData: _loadData
		}

	}

	LEADBOARD.LeaderboardProxy = LeaderboardProxy;

}(LEADBOARD || {}))