/**
 * Created by mezzalab2013 on 14/11/14.
 */
jenius.View = function(){

    var _id = String(new Date().getTime()) + String(Math.random());

    function _resize(){
    }

    function _dispose(){
    }

    return {
        id: _id,
        dispose: _dispose,
        resize: _resize
    };

};