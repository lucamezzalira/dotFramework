/**
 * Created by mezzalab2013 on 14/11/14.
 */
jenius.LocalStorage = function(){

    function _isActive(){
         return (typeof(Storage) !== "undefined");
    }

    function _setData(_id, _data){
        localStorage.setItem(_id, _data);
    }

    function _getData(_id){
        return localStorage.getItem(_id);
    }

    function _removeData(_id){
        localStorage.removeItem(_id);
    }

    function _removeAllData(){
        localStorage.clear();
    }

    return{
        isActive: _isActive,
        setData: _setData,
        getData: _getData,
        removeData: _removeData,
        removeAllData: _removeAllData
    };

};