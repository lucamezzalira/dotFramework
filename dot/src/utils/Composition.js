/**
 * Created by mezzalab2013 on 26/11/14.
 */
jenius.Composition = (function(){

    function _mixin(_source, _target){
        _source.call(_target);
    }

    return{
        mixin: _mixin
    };

}());