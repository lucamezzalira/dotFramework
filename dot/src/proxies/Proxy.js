/**
 * Created by mezzalab2013 on 13/11/14.
 */
(function(jenius){
    function Proxy(_url, _method, _successHandler, _errorHandler) {
        var _status, _data;
        var _id = String(new Date().getTime()) + String(Math.random());
        var _xhr = new XMLHttpRequest();
        _xhr.onreadystatechange = function () {
            if (_xhr.readyState === 4) {
                _resultCall();
            }
        };

        function _resultCall() {
            _status = _xhr.status;
            if (_status === 200) {
                _data = _xhr.responseText;
                _onSuccess();
            } else {
                _onError();
            }
        }

        function _onSuccess() {
            try {
                _successHandler(_data);
            } catch (e) {
                throw new Error("Success callback not defined inside your proxy instance!");
            }
        }

        function _onError() {
            try {
                _errorHandler(_status);
            } catch (e) {
                console.log("Error to retrieve data from " + _url + ", error code:" + _status);
            }
        }

        function _sendCall(_dataToSend) {
            _xhr.open(_method, _url, true);
            _xhr.send(_dataToSend);
        }

        function _addHeader(_name, _value) {
            _xhr.setRequestHeader(_name, _value);
        }

        function _getData() {
            return _data;
        }

        return {
            call: _sendCall,
            addHeader: _addHeader,
            id: _id,
            getData: _getData
        };
    }

    jenius.Proxy = Proxy;

}(jenius || {}));