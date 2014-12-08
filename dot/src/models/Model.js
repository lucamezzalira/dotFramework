/**
 * Created by mezzalab2013 on 07/11/14.
 */
(function(jenius){
    function Model(_reference) {
        var _id = String(new Date().getTime()) + String(Math.random());
        var _nameReference = _reference || _id;

        function _reset() {
        }

        function _dispose() {
        }

        return {
            id: _id,
            nameReference: _nameReference,
            dispose: _dispose,
            reset: _reset
        };
    }

    jenius.Model = Model;
}(jenius || {}));