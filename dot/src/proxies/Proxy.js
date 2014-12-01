/**
 * Created by mezzalab2013 on 13/11/14.
 */
jenius.Proxy = function(_url, _method, _successHandler, _errorHandler){

    var _status, _data;
    var _id = String(new Date().getTime()) + String(Math.random());
    var _xhr = new XMLHttpRequest();
    _xhr.onreadystatechange = function(){

        if (_xhr.readyState === 4) {
            _status = _xhr.status;
            if (_status === 200) {
                _data = _xhr.responseText;
                if(_successHandler){
                    _successHandler(_data);
                }
            } else {
                if(_errorHandler){
                    _errorHandler(_status);
                } else {
                    console.log("Error to retrieve data from " + _url + ", error code:" + _status);
                }
            }
        }
    };

    function _sendCall(_dataToSend){
        _xhr.open(_method, _url, true);
        _xhr.send(_dataToSend);
    }

    function _addHeader(_name, _value){
        _xhr.setRequestHeader(_name, _value);
    }

    function _getData(){
        return _data;
    }

    return{
        call: _sendCall,
        addHeader: _addHeader,
        id: _id,
        getData: _getData
    };

};