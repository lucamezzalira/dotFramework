/**
 * Created by mezzalab2013 on 08/12/14.
 */
(function (LEADBOARD){

    function Main(){

        var _renderer, _stage;

        function _init(){
            _stage = new PIXI.Stage(0xFFFFFF, true);

            var opts ={
                view: document.getElementById("leadboardCanvas"),
                resolution: window.devicePixelRatio,
                antialias: true
            };

            _renderer = new PIXI.autoDetectRecommendedRenderer(window.innerWidth, window.innerHeight, opts);

            _draw();
            _setupScene();
        }

        function _setupScene(){
            var leadboardView = new LEADBOARD.LeadboardView(_stage);
            var leadboardPM = new LEADBOARD.LeadboardPM(leadboardView);
        }

        function _draw() {
            _renderer.render(_stage);
            requestAnimationFrame(_draw);
        }

        return {
            init: _init
        }

    }

    LEADBOARD.Main = new Main();

}(LEADBOARD || {}))