/**
 * Created by mezzalab2013 on 26/11/14.
 */
(function(jenius){
    function Composition() {

        function _mixin(_source, _target) {
           return _source.call(_target);
        }

        return {
            mixin: _mixin
        };
    }

    jenius.Composition = new Composition();
}(jenius || {}));