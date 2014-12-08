 (function(jenius){
    function EventEmitter() {

        var eventsArray = [];

        function _on(_event, _callBack) {
            _addEvent(_event, _callBack, false);
        }

        function _onOnce(_event, _callBack) {
            _addEvent(_event, _callBack, true);
        }

        function _addEvent(_event, _callBack, _isOnce) {
            if (typeof _callBack !== "function") {
                throw new Error("callback must be a function!");
            }

            eventsArray.push({evt: _event, clb: _callBack, isOnce: _isOnce});
        }

        function _off(_event) {
            var tmpArr = eventsArray;
            eventsArray = tmpArr.filter(function (currentValue) {
                if (currentValue.evt.id !== _event.id) {
                    return currentValue;
                }
            });
        }

        function _reset() {
            eventsArray = [];
        }

        function _emit(_event, _arguments) {
            var scope = this;
            eventsArray.map(function (currentValue) {
                if (currentValue.evt.type === _event.type) {
                    currentValue.clb(_arguments);
                    if (currentValue.isOnce) {
                        scope.off(currentValue.evt);
                    }
                }

            });

        }

        return {
            on: _on,
            onOnce: _onOnce,
            off: _off,
            reset: _reset,
            emit: _emit
        };
    }

     jenius.EventEmitter = new EventEmitter();

}(jenius || {}));
