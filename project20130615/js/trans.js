/*
Transformer Module(constructor,mappingTable ver.)
Assumption : 
option = { -webkit- : true , ... }
overOption = false or true

overriding option done
Look at the difference from overOption!!

2013.6.15. 12:00 ver
*/


//print object(for test)
var printArray = function(input,depth){
	var result = "";
	var indentDepth = function(depth){
		var result = "";
		for(var i=0;i<depth;i++){
			result += "    ";
		}
		return result;
	};

	for(var key in input){
		if(typeof(input[key])=="object"){
			result += (indentDepth(depth) + key + " : " + "\n" + printArray(input[key],(depth+1)));
		}else{
			result += (indentDepth(depth) + key + " : " + input[key] + "\n");
		}
	}
	return result;
}

//test input
/*
var input =
{
	/*
	"charset": "'utf-8'",
	"imports": [
		{
			"import": "'custom.css'"
		},
		{
			"import": "url(\"fineprint.css\")"
		},
		{
			"import": "url(\"fineprint.css\")",
			"mediaqueries": "print"
		},
		{
			"import": "url(\"bluish.css\")",
			"mediaqueries": "projection, tv"
		},
		{
			"import": "\"common.css\"",
			"mediaqueries": "screen, projection"
		},
		{
			"import": "url('landscape.css')",
			"mediaqueries": "screen and (orientation:landscape)"
		}
	],
	"namespaces": [
		{
			"namespace": "\"http://www.w3c.org\""
		},
		{
			"namespace": "\"http://www.w3c.org/svg\"",
			"prefix": "svg"
		}
	],
	"rulelist": [
		{
			"type": "keyframes",
			"id": "myanim",
			"keyframes": [
				{
					"type": "keyframe",
					"offset": "0%",
					"declarations": {
						"opacity": "0.0"
					}
				},
				{
					"type": "keyframe",
					"offset": "50%",
					"declarations": {
						"opacity": "0.5"
					}
				},
				{
					"type": "keyframe",
					"offset": "100%",
					"declarations": {
						"opacity": "1.0"
					}
				}
			],
			"prefix": "-webkit-"
		},
		{
			"type": "media",
			"mediaqueries": "screen",
			"children": [
				{
					"type": "style",
					"selector": "*",
					"declarations": {
						"-moz-appearance": "aa",
						"-webkit-appearance": "bb"
					}
				},
				{
					"type": "style",
					"selector": ".box_shadow",
					"declarations": {
						"box-shadow": "1px 2px 3px 4px #ffffff",
						"-webkit-box-shadow": "0px 0px 4px 0px #ffffff",
						"-moz-box-shadow": "0px 0px 4px 0px #ffffff"
					}
				}
			]
		},	
		{
			"type": "style",
			"selector": ".matrix",
			"declarations": {
				"transform": "matrix(1.186,-0.069,0.102,1.036,16.595,73.291)"
			}
		},
		{
			"type": "fontface",
			"declarations": {
				"font-family": "'WebFont'",
				"src": "url('myfont.woff') format('woff'),url('myfont.ttf') format('truetype')"
			}
		}
		
	]
};
*/

//test option
/*
var option = {
	"-moz-" : true,
	"-ms-" : true,
	"-webkit-" : true,
	"-o-" : true
};

var overOption = false;
*/

//Transformer class module
var Transformer = function(Tinput,Toption,Ooption){

	this.result = Tinput;

	this.mappingTable = {
		'accelerator' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : "-ms-"
		},
		
		'accesskey' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "-wap-",
			'ie' : ""
		},

		'align-content' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},
			
		'align-items' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'align-self' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'animation' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'animation-delay' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'animation-direction' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'animation-duration' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'animation-fill-mode' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'animation-iteration-count' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'animation-name' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'animation-play-state' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'animation-timing-function' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'animation-app-region' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},
		
		'app-region' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'appearance' : {
			'firefox' : "-moz-",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'aspect-ratio' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'backface-visibility' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'background-attachment' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : ""
		},

		'background-color' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : ""
		},

		'background-image' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : ""
		},

		'background-blend-mode' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'background-clip' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'background-composite' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'background-inline-policy' : {
			'firefox' : "-moz-",
			'webkit' : "",
			'opera' : "",
			'ie' : ""
		},

		'background-origin' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'background-position' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : ""
		},

		'background-position-x' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : "-ms-"
		},

		'background-position-y' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : "-ms-"
		},

		'background-repeat' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : ""
		},

		'background-size' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'behavior' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : "-ms-"
		},

		'binding' : {
			'firefox' : "-moz-",
			'webkit' : "",
			'opera' : "",
			'ie' : ""
		},

		'blend-mode' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'block-progression' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : "-ms-"
		},

		'border' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : ""
		},

		'border-after' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'border-after-color' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'border-after-style' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'border-after-width' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'border-before' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'border-before-color' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'border-before-style' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'border-before-width' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'border-bottom' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : ""
		},

		'border-bottom-color' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : ""
		},

		'border-bottom-colors' : {
			'firefox' : "-moz-",
			'webkit' : "",
			'opera' : "",
			'ie' : ""
		},

		'border-bottom-left-radius' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'border-bottom-right-radius' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'border-bottom-style' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : ""
		},

		'border-bottom-width' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : ""
		},

		'border-color' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : ""
		},

		'border-end' : {
			'firefox' : "-moz-",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'border-end-color' : {
			'firefox' : "-moz-",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'border-end-style' : {
			'firefox' : "-moz-",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'border-end-width' : {
			'firefox' : "-moz-",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'border-fit' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'border-horizontal-spacing' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'border-image' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "-o-",
			'ie' : ""
		},

		'border-image-outset' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : ""
		},

		'border-image-repeat' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : ""
		},

		'border-image-slice' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : ""
		},

		'border-image-source' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : ""
		},

		'border-image-width' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : ""
		},

		'border-left' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : ""
		},

		'border-left-color' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : ""
		},

		'border-left-colors' : {
			'firefox' : "-moz-",
			'webkit' : "",
			'opera' : "",
			'ie' : ""
		},

		'border-radius' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'border-right-colors' : {
			'firefox' : "-moz-",
			'webkit' : "",
			'opera' : "",
			'ie' : ""
		},

		'border-start' : {
			'firefox' : "-moz-",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'border-start-color' : {
			'firefox' : "-moz-",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'border-start-style' : {
			'firefox' : "-moz-",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'border-start-width' : {
			'firefox' : "-moz-",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'border-top-colors' : {
			'firefox' : "-moz-",
			'webkit' : "",
			'opera' : "",
			'ie' : ""
		},

		'border-top-left-radius' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'border-top-right-radius' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'border-vertical-spacing' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'box-align' : {
			'firefox' : "-moz-",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'box-decoration-break' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'box-direction' : {
			'firefox' : "-moz-",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'box-flex' : {
			'firefox' : "-moz-",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'box-flex-group' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'box-lines' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'box-ordinal-group' : {
			'firefox' : "-moz-",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'box-orient' : {
			'firefox' : "-moz-",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'box-pack' : {
			'firefox' : "-moz-",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'box-reflect' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'box-shadow' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'box-sizing' : {
			'firefox' : "-moz-",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'caption-side' : {
			'firefox' : "",
			'webkit' : "-equb-",
			'opera' : "",
			'ie' : ""
		},

		'clip-path' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'color-correction' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'color-profile' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : ""
		},

		'column-axis' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'column-break-after' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'column-break-before' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'column-break-inside' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'column-count' : {
			'firefox' : "-moz-",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'column-fill' : {
			'firefox' : "-moz-",
			'webkit' : "",
			'opera' : "",
			'ie' : ""
		},

		'column-gap' : {
			'firefox' : "-moz-",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'column-progression' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'column-rule' : {
			'firefox' : "-moz-",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'column-rule-color' : {
			'firefox' : "-moz-",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'column-rule-style' : {
			'firefox' : "-moz-",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'column-rule-width' : {
			'firefox' : "-moz-",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'column-span' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'column-width' : {
			'firefox' : "-moz-",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'columns' : {
			'firefox' : "-moz-",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'content-zoom-chaining' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : "-ms-"
		},

		'content-zoom-limit' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : "-ms-"
		},

		'content-zoom-limit-max' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : "-ms-"
		},

		'content-zoom-limit-min' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : "-ms-"
		},

		'content-zoom-snap' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : "-ms-"
		},

		'content-zoom-snap-points' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : "-ms-"
		},

		'content-zoom-snap-type' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : "-ms-"
		},

		'content-zooming' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : "-ms-"
		},

		'cursor-visibility' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'dashboard-region' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "-apple-",
			'ie' : ""
		},

		'device-pixel-radio' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "-o-",
			'ie' : ""
		},

		'filter' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : "-ms-"
		},

		'flex' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : "-ms-"
		},

		'flex-align' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : "-ms-"
		},

		'flex-basis' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'flex-direction' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : "-ms-"
		},

		'flex-flow' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'flex-grow' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'flex-order' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : "-ms-"
		},

		'flex-pack' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : "-ms-"
		},

		'flex-shrink' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'flex-wrap' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : "-ms-"
		},

		'float-edge' : {
			'firefox' : "-moz-",
			'webkit' : "",
			'opera' : "",
			'ie' : ""
		},

		'flow-from' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : "-ms-"
		},

		'flow-into' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : "-ms-"
		},

		'focus-opacity' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "-o-",
			'ie' : ""
		},

		'font-feature-settings' : {
			'firefox' : "-moz-",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'font-kerning' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'font-language-override' : {
			'firefox' : "-moz-",
			'webkit' : "",
			'opera' : "",
			'ie' : ""
		},

		'font-size-adjust' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : ""
		},

		'font-size-delta' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'font-smoothing' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'font-variant-ligatures' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'force-broken-image-icon' : {
			'firefox' : "-moz-",
			'webkit' : "",
			'opera' : "",
			'ie' : ""
		},

		'grid-after' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'grid-auto-columns' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'grid-auto-flow' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'grid-auto-rows' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'grid-before' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'grid-column' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : "-ms-"
		},

		'grid-column-align' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : "-ms-"
		},

		'grid-column-span' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : "-ms-"
		},

		'grid-columns' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : "-ms-"
		},

		'grid-end' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'grid-row' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : "-ms-"
		},

		'grid-row-align' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : "-ms-"
		},

		'grid-row-span' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : "-ms-"
		},

		'grid-rows' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : "-ms-"
		},

		'grid-start' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'high-contrast-adjust' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : "-ms-"
		},

		'highlight' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'hyphenate-character' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'hyphenate-limit-after' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'hyphenate-limit-before' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'hyphenate-limit-chars' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : "-ms-"
		},

		'hyphenate-limit-lines' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : "-ms-"
		},

		'hyphenate-limit-zone' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : "-ms-"
		},

		'hyphens' : {
			'firefox' : "-moz-",
			'webkit' : "-epub-",
			'opera' : "",
			'ie' : "-ms-"
		},

		'image-region' : {
			'firefox' : "-moz-",
			'webkit' : "",
			'opera' : "",
			'ie' : ""
		},

		'ime-mode' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : "-ms-"
		},

		'input-format' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "-wap-",
			'ie' : ""
		},

		'input-required' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "-wap-",
			'ie' : ""
		},

		'interpolation-mode' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : "-ms-"
		},

		'interpret-as' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "-xv-",
			'ie' : ""
		},

		'justify-content' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'layout-flow' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : "-ms-"
		},

		'layout-grid' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : "-ms-"
		},

		'layout-grid-char' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : "-ms-"
		},

		'layout-grid-line' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : "-ms-"
		},

		'layout-grid-mode' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : "-ms-"
		},

		'layout-grig-type' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : "-ms-"
		},

		'line-align' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'line-box-contain' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'line-break' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'line-clamp' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'line-grid' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'line-snap' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'link' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "-o-",
			'ie' : ""
		},

		'link-source' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "-o-",
			'ie' : ""
		},

		'locale' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'logical-height' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'logical-width' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'margin-after' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'margin-after-collapse' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'margin-before' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'margin-before-collapse' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'margin-bottom-collapse' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'margin-collapse' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'margin-end' : {
			'firefox' : "-moz-",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'margin-start' : {
			'firefox' : "-moz-",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'margin-top-collapse' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'marquee' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'marquee-dir' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "-wap-",
			'ie' : ""
		},

		'marquee-direction' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'marquee-increment' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'marquee-loop' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "-wap-",
			'ie' : ""
		},

		'marquee-play-count' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'marquee-repetition' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'marquee-speed' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "-wap-",
			'ie' : ""
		},

		'marquee-style' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "-wap-",
			'ie' : ""
		},

		'mask' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'mask-box-image' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'mask-box-image-outset' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'mask-box-image-repeat' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'mask-box-image-slice' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'mask-box-image-source' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'mask-box-image-width' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'mask-clip' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'mask-composite' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'mask-image' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'mask-origin' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},
			
		'mask-position' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'mask-position-x' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'mask-position-y' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'mask-repeat' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'mask-repeat-x' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'mask-repeat-y' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'mask-size' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'max-logical-height' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'max-logical-width' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'min-logical-height' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'min-logical-width' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'mini-fold' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "-o-",
			'ie' : ""
		},

		'nav-down' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : ""
		},

		'nav-index' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : ""
		},

		'nav-left' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : ""
		},

		'nav-right' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : ""
		},

		'nav-up' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : ""
		},

		'nbsp-mode' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'object-fit' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "-o-",
			'ie' : ""
		},

		'object-position' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "-o-",
			'ie' : ""
		},

		'opacity' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'outline' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : ""
		},

		'outline-color' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : ""
		},

		'outline-style' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : ""
		},

		'outline-width' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : ""
		},

		'outline-offset' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : ""
		},

		'order' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'orient' : {
			'firefox' : "-moz-",
			'webkit' : "",
			'opera' : "",
			'ie' : ""
		},

		'outline-radius' : {
			'firefox' : "-moz-",
			'webkit' : "",
			'opera' : "",
			'ie' : ""
		},

		'outline-radius-bottomleft' : {
			'firefox' : "-moz-",
			'webkit' : "",
			'opera' : "",
			'ie' : ""
		},

		'outline-radius-bottomright' : {
			'firefox' : "-moz-",
			'webkit' : "",
			'opera' : "",
			'ie' : ""
		},

		'outline-radius-topleft' : {
			'firefox' : "-moz-",
			'webkit' : "",
			'opera' : "",
			'ie' : ""
		},

		'outline-radius-topright' : {
			'firefox' : "-moz-",
			'webkit' : "",
			'opera' : "",
			'ie' : ""
		},

		'overflow-scrolling' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'overflow-style' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : "-ms-"
		},

		'overflow-x' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : "-ms-"
		},
		
		'overflow-y' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : "-ms-"
		},

		'padding-after' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'padding-before' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'padding-end' : {
			'firefox' : "-moz-",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'padding-start' : {
			'firefox' : "-moz-",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'perspective' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'perspective-origin' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'perspective-origin-x' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'perspective-origin-y' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'phonemes' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "-xv-",
			'ie' : ""
		},

		'print-color-adjust' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'progress-appearance' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : "-ms-"
		},

		'region-break-after' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'region-break-before' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'region-break-inside' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'region-overflow' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'rendering-intent' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : ""
		},

		'resize' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : ""
		},

		'rotation' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : ""
		},

		'rotation-point' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : ""
		},

		'rtl-ordering' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'ruby-align' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : ""
		},

		'ruby-overhang' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : ""
		},

		'ruby-position' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'script-level' : {
			'firefox' : "-moz-",
			'webkit' : "",
			'opera' : "",
			'ie' : ""
		},

		'script-min-size' : {
			'firefox' : "-moz-",
			'webkit' : "",
			'opera' : "",
			'ie' : ""
		},

		'script-size-multiplier' : {
			'firefox' : "-moz-",
			'webkit' : "",
			'opera' : "",
			'ie' : ""
		},

		'scroll-chaining' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : "-ms-"
		},

		'scroll-limit' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : "-ms-"
		},

		'scroll-limit-x-max' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : "-ms-"
		},

		'scroll-limit-x-min' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : "-ms-"
		},

		'scroll-limit-y-max' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : "-ms-"
		},

		'scroll-limit-y-min' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : "-ms-"
		},

		'scroll-rails' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : "-ms-"
		},

		'scroll-snap-points-x' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : "-ms-"
		},

		'scroll-snap-points-y' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : "-ms-"
		},

		'scroll-snap-type' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : "-ms-"
		},

		'scroll-snap-x' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : "-ms-"
		},

		'scroll-snap-y' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : "-ms-"
		},

		'scroll-translation' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : "-ms-"
		},

		'scrollbar-arrow-color' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : "-ms-"
		},

		'scrollbar-base-color' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : "-ms-"
		},

		'scrollbar-darkshadow-color' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : "-ms-"
		},

		'scrollbar-face-color' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : "-ms-"
		},

		'scrollbar-highlight-color' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : "-ms-"
		},

		'scrollbar-shadow-color' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : "-ms-"
		},

		'scrollbar-track-color' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : "-ms-"
		},

		'shape-inside' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'shape-margin' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'shape-outside' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'shape-padding' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'stack-sizing' : {
			'firefox' : "-moz-",
			'webkit' : "",
			'opera' : "",
			'ie' : ""
		},

		'svg-shadow' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'tab-size' : {
			'firefox' : "-moz-",
			'webkit' : "",
			'opera' : "-o-",
			'ie' : ""
		},

		'table-baseline' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "-o-",
			'ie' : ""
		},

		'tap-highlight-color' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'text-align-last' : {
			'firefox' : "-moz-",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : "-ms-"
		},

		'text-autospace' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : "-ms-"
		},

		'text-blink' : {
			'firefox' : "-moz-",
			'webkit' : "",
			'opera' : "",
			'ie' : ""
		},

		'text-combine' : {
			'firefox' : "",
			'webkit' : "-epub-",
			'opera' : "",
			'ie' : ""
		},

		'text-decoration-color' : {
			'firefox' : "-moz-",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'text-decoration-line' : {
			'firefox' : "-moz-",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'text-decoration-style' : {
			'firefox' : "-moz-",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'text-decoration-in-effect' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'text-emphasis' : {
			'firefox' : "",
			'webkit' : "-epub-",
			'opera' : "",
			'ie' : ""
		},

		'text-emphasis-color' : {
			'firefox' : "",
			'webkit' : "-epub-",
			'opera' : "",
			'ie' : ""
		},

		'text-emphasis-position' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'text-emphasis-style' : {
			'firefox' : "",
			'webkit' : "-epub-",
			'opera' : "",
			'ie' : ""
		},

		'text-fill-color' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'text-justify' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : "-ms-"
		},

		'text-kashida-space' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : "-ms-"
		},

		'text-orientation' : {
			'firefox' : "",
			'webkit' : "-epub-",
			'opera' : "",
			'ie' : ""
		},

		'text-overflow' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : "-ms-"
		},

		'text-shadow' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : ""
		},

		'text-security' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'text-size-adjust' : {
			'firefox' : "-moz-",
			'webkit' : "",
			'opera' : "",
			'ie' : ""
		},

		'text-stroke' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'text-stroke-color' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'text-stroke-width' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'text-transform' : {
			'firefox' : "",
			'webkit' : "-epub-",
			'opera' : "",
			'ie' : ""
		},

		'text-underline-position' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : "-ms-"
		},

		'touch-action' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : "-ms-"
		},

		'touch-callout' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'transform' : {
			'firefox' : "-moz-",
			'webkit' : "-webkit-",
			'opera' : "-o-",
			'ie' : ""
		},

		'transform-origin' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "-o-",
			'ie' : ""
		},

		'transform-origin-x' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'transform-origin-y' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'transform-origin-z' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'transform-style' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'transition' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "-o-",
			'ie' : ""
		},

		'transition-delay' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "-o-",
			'ie' : ""
		},

		'transition-duration' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "-o-",
			'ie' : ""
		},

		'transition-property' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "-o-",
			'ie' : ""
		},

		'transition-timing-function' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "-o-",
			'ie' : ""
		},

		'user-drag' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'user-focus' : {
			'firefox' : "-moz-",
			'webkit' : "",
			'opera' : "",
			'ie' : ""
		},

		'user-input' : {
			'firefox' : "-moz-",
			'webkit' : "",
			'opera' : "",
			'ie' : ""
		},

		'user-modify' : {
			'firefox' : "-moz-",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : ""
		},

		'user-select' : {
			'firefox' : "-moz-",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : "-ms-"
		},

		'voice-balance' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "-xv-",
			'ie' : ""
		},

		'voice-duration' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "-xv-",
			'ie' : ""
		},

		'voice-pitch' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "-xv-",
			'ie' : ""
		},

		'voice-pitch-range' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "-xv-",
			'ie' : ""
		},

		'voice-rate' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "-xv-",
			'ie' : ""
		},

		'voice-stress' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "-xv-",
			'ie' : ""
		},

		'voice-volume' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "-xv-",
			'ie' : ""
		},

		'window-shadow' : {
			'firefox' : "-moz-",
			'webkit' : "",
			'opera' : "",
			'ie' : ""
		},

		'word-break' : {
			'firefox' : "",
			'webkit' : "-epub-",
			'opera' : "",
			'ie' : "-ms-"
		},

		'word-wrap' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : "-ms-"
		},

		'wrap-flow' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : "-ms-"
		},

		'wrap-margin' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : "-ms-"
		},

		'wrap-through' : {
			'firefox' : "",
			'webkit' : "-webkit-",
			'opera' : "",
			'ie' : "-ms-"
		},

		'writing-mode' : {
			'firefox' : "",
			'webkit' : "-epub-",
			'opera' : "",
			'ie' : "-ms-"
		},

		'zoom' : {
			'firefox' : "",
			'webkit' : "",
			'opera' : "",
			'ie' : "-ms-"
		}
	};
		
	//map : return proper prefix in table
	this.map = function(decl,engine,mappingTable){
		var result = "";
		if(engine == '-moz-' && typeof(mappingTable[decl])!='undefined' && typeof(mappingTable[decl]['firefox'])!='undefined'){
			result  = mappingTable[decl]['firefox'];
		}
		if(engine == '-ms-' && typeof(mappingTable[decl])!='undefined' && typeof(mappingTable[decl]['firefox'])!='undefined'){
			result = mappingTable[decl]['ie'];
		}
		if(engine == '-webkit-' && typeof(mappingTable[decl])!='undefined' && typeof(mappingTable[decl]['firefox'])!='undefined'){
			result = mappingTable[decl]['webkit'];
		}
		if(engine == '-o-' && typeof(mappingTable[decl])!='undefined' && typeof(mappingTable[decl]['firefox'])!='undefined'){
			result = mappingTable[decl]['opera'];
		}
		return result;
	};


	this.removePrefix = function(input){
		var result = input;
		result = result.replace("-moz-","");
		result = result.replace("-o-","");
		result = result.replace("-ms-","");
		result = result.replace("-webkit-","");
		result = result.replace("-apple-","");
		result = result.replace("-epub-","");
		result = result.replace("-wap-","");
		result = result.replace("-xv-","");
		return result;
	};

	//aux (object ver.)
	this.transform_aux = function(myinput,myoption,ooption){
		var result = {};
		for(var key1 in myinput){
			for(var key in myoption){
				if(myoption[key] == true){
					if(ooption == true || ( ooption == false && typeof(myinput[this.map(this.removePrefix(key1),key,this.mappingTable) + this.removePrefix(key1)]) == "undefined" && typeof(result[this.map(this.removePrefix(key1),key,this.mappingTable) + this.removePrefix(key1)]) == "undefined") ){ // when not exist
						result[this.map(this.removePrefix(key1),key,this.mappingTable) + this.removePrefix(key1)] = myinput[key1];
					}
					if(ooption == false && typeof(myinput[this.map(this.removePrefix(key1),key,this.mappingTable) + this.removePrefix(key1)]) != "undefined" && typeof(result[this.map(this.removePrefix(key1),key,this.mappingTable) + this.removePrefix(key1)]) == "undefined"){ // when already exist
						result[this.map(this.removePrefix(key1),key,this.mappingTable) + this.removePrefix(key1)] = myinput[this.map(this.removePrefix(key1),key,this.mappingTable) + this.removePrefix(key1)];
					}
				}
			}
		}
		//alert(printArray(result,0));
		return result;
	};

	this._clone = function(obj){
		var result = {};
		for(var key in obj){
			if(typeof(obj[key]) == "object"){
				result[key] = this._clone(obj[key]);
			}
			else{
				result[key] = obj[key];
			}
		}
		return result;
	};


	this.tr_keyframes_aux = function(tmp,prefix){
		tmp["prefix"] = prefix;
	};

	this.tr_keyframes = function(rulelist, keyframes, option){
		for(var key in option){
			if(option[key] == true){
				var temp = this._clone(keyframes);
				this.tr_keyframes_aux(temp,key);
				rulelist.push(temp);
			}
		}
	};

	this.tr_key = function(myinput,myoption){
		for(key in myinput){
			if(key == "rulelist"){
				for(var key1 in myinput[key]){
					if(myinput[key][key1]["type"] == "keyframes"){
						this.tr_keyframes(myinput[key],myinput[key][key1],myoption);
						break;
					}
				}
			}
		}
	};

	//transform(recursive)
	this.transform = function(myinput,myoption,ooption){
		//recursively..
		for(var key in myinput){
			if(key == "declarations"){
				myinput[key] = this.transform_aux(myinput[key],myoption,ooption);
			}
			if(typeof(myinput[key]) =="object"){
				this.transform(myinput[key],myoption,ooption);
			}
		}
	};
	
	this.transform(this.result,Toption,Ooption);
	this.tr_key(this.result,Toption);
};
