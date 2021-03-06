/*
Optimizer Module class
Todo : color, font, padding&margin, etc
		linebreak, multispace... -> need not to object
Assumption :
var option = {
	"color" : true,
	"font" : true,
	"padding" : true,
	"etc" : true
};

splitPadding&Margin -> opt -> merge again
2013.6.15. 12:00 ver
*/

//print object (for test)
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

//Power naive.. Almost done
var Optimizer = function(input, option){

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

	this.optColor = function(myinput){
		//rgbToHex
		var rgbToHex = function(rgb){
			var result = "#";
			rgb = rgb.replace("rgb","");
			rgb = rgb.replace("(","");
			rgb = rgb.replace(")","");
			//rgb = "0,0,255"
			var tmp = rgb.split(",");
			if(tmp[0]*1 < 16){
				result += "0";
				result += ((tmp[0]*1).toString(16)+"");
			}else{
				result += ((tmp[0]*1).toString(16)+"");
			}
			if(tmp[1]*1 < 16){
				result += "0";
				result += ((tmp[1]*1).toString(16)+"");
			}else{
				result += ((tmp[1]*1).toString(16)+"");
			}
			if(tmp[2]*1 < 16){
				result += "0";
				result += ((tmp[2]*1).toString(16)+"");
			}else{
				result += ((tmp[2]*1).toString(16)+"");
			}
			return result;
		};

		//recursively
		for(var key in myinput){
			// #0077ff -> #07f
			if(this.removePrefix(key) == "color"){
				if(myinput[key].charAt(0) == "r" && myinput[key].charAt(1) == "g" && myinput[key].charAt(2) == "b"){
					myinput[key] = rgbToHex(myinput[key]);
				}

				if(key != "selector" && myinput[key].charAt(0) == "#" && myinput[key].charAt(1)==myinput[key].charAt(2) && myinput[key].charAt(3)==myinput[key].charAt(4) && myinput[key].charAt(5)==myinput[key].charAt(6)){
					myinput[key] = myinput[key].charAt(0) + myinput[key].charAt(1) + myinput[key].charAt(3) + myinput[key].charAt(5);
				}
			}
			if(typeof(myinput[key]) =="object"){
				this.optColor(myinput[key]);
			}
		}
	};

	this.optFont = function(myinput){
		//recursively
		for(var key in myinput){
			// bold -> 700, normal -> 400
			if(this.removePrefix(key) == "font-weight"){
				if(myinput[key] == "normal"){
					myinput[key] = "400";
				}
				if(myinput[key] == "bold"){
					myinput[key] = "700";
				}
			}
			if(typeof(myinput[key]) =="object"){
				this.optFont(myinput[key]);
			}
		}
	};

	this.splitPadding = function(myinput){
		for(var key in myinput){
			if(this.removePrefix(key) == "declarations"){
				if(typeof(myinput[key]["padding"]) != "undefined"){
					var tmp = myinput[key]["padding"].split(" ");
					if(tmp.length == 2){
						myinput[key]["padding-top"] = tmp[0];
						myinput[key]["padding-right"] = tmp[1];
						myinput[key]["padding-bottom"] = tmp[0];
						myinput[key]["padding-left"] = tmp[1];
						delete myinput[key]["padding"];
					}
					if(tmp.length ==4){
						myinput[key]["padding-top"] = tmp[0];
						myinput[key]["padding-right"] = tmp[1];
						myinput[key]["padding-bottom"] = tmp[2];
						myinput[key]["padding-left"] = tmp[3];
						delete myinput[key]["padding"];
					}
				}
				if(typeof(myinput[key]["margin"]) != "undefined"){
					var tmp = myinput[key]["margin"].split(" ");
					if(tmp.length == 2){
						myinput[key]["margin-top"] = tmp[0];
						myinput[key]["margin-right"] = tmp[1];
						myinput[key]["margin-bottom"] = tmp[0];
						myinput[key]["margin-left"] = tmp[1];
						delete myinput[key]["margin"];
					}
					if(tmp.length ==4){
						myinput[key]["margin-top"] = tmp[0];
						myinput[key]["margin-right"] = tmp[1];
						myinput[key]["margin-bottom"] = tmp[2];
						myinput[key]["margin-left"] = tmp[3];
						delete myinput[key]["margin"];
					}
				}
			}
			if(typeof(myinput[key]) == "object"){
				this.splitPadding(myinput[key]);
			}
		}
	};

	this.optPadding = function(myinput){
		//optPadding_aux
		var optPadding_aux = function(decl){
			if(decl["padding-top"]==decl["padding-bottom"] && decl["padding-left"]==decl["padding-right"] && decl["padding-top"]==decl["padding-right"]){ // n1=n2=n3=n4
				decl["padding"] = decl["padding-top"];
			}else if(decl["padding-top"]==decl["padding-bottom"] && decl["padding-left"]==decl["padding-right"] && decl["padding-top"]!=decl["padding-right"]){ // n1=n3, n2=n4
				decl["padding"] = decl["padding-top"] + " " + decl["padding-left"];				
			}else{ // else
				decl["padding"] = decl["padding-top"] + " " + decl["padding-right"] + " " + decl["padding-bottom"] + " " + decl["padding-left"];
			}
			delete decl["padding-top"];
			delete decl["padding-bottom"];
			delete decl["padding-left"];
			delete decl["padding-right"];
		};

		var optMargin_aux = function(decl){
			if(decl["margin-top"]==decl["margin-bottom"] && decl["margin-left"]==decl["margin-right"] && decl["margin-top"]==decl["margin-right"]){ // n1=n2=n3=n4
				decl["margin"] = decl["margin-top"];
			}else if(decl["margin-top"]==decl["margin-bottom"] && decl["margin-left"]==decl["margin-right"] && decl["margin-top"]!=decl["margin-right"]){ // n1=n3, n2=n4
				decl["margin"] = decl["margin-top"] + " " + decl["margin-left"];				
			}else{ // else
				decl["margin"] = decl["margin-top"] + " " + decl["margin-right"] + " " + decl["margin-bottom"] + " " + decl["margin-left"];
			}
			delete decl["margin-top"];
			delete decl["margin-bottom"];
			delete decl["margin-left"];
			delete decl["margin-right"];
		};

		//recursively
		for(var key in myinput){
			//this.splitPadding(myinput);
			// top bottom left right -> one line
			if(this.removePrefix(key) == "declarations"){ // 4 must exist
				if(typeof(myinput[key]["padding-top"])!="undefined" && typeof(myinput[key]["padding-bottom"])!="undefined" && typeof(myinput[key]["padding-left"])!="undefined" && typeof(myinput[key]["padding-right"])!="undefined"){
					//alert("padding optimize");
					optPadding_aux(myinput[key]);
				}
				if(typeof(myinput[key]["margin-top"])!="undefined" && typeof(myinput[key]["margin-bottom"])!="undefined" && typeof(myinput[key]["margin-left"])!="undefined" && typeof(myinput[key]["margin-right"])!="undefined"){
					//alert("padding optimize");
					optMargin_aux(myinput[key]);
				}
				
			}
			if(typeof(myinput[key]) =="object"){
				this.optPadding(myinput[key]);
			}
		}
	};

	this.optEtc = function(myinput){
		//recursively
		for(var key in myinput){
			// 0px 0cm 0deg ... -> 0 (remove unit)
			if(myinput[key] == "0em" || myinput[key] == "0ex" || myinput[key] == "0px" || myinput[key] == "0cm" || myinput[key] == "0mm" || myinput[key] == "0in" || myinput[key] == "0pt" || myinput[key] == "0pc" || myinput[key] == "0deg" || myinput[key] == "0rad" || myinput[key] == "0grad" || myinput[key] == "0ms" || myinput[key] == "0s" || myinput[key] == "0Hz" || myinput[key] == "0kHz" ){
				//alert("zero optimize");
				myinput[key] = "0";
			}
			if(typeof(myinput[key]) =="object"){
				this.optEtc(myinput[key]);
			}
		}

	};

	this.optimize = function(myinput){
		if(option["etc"] == true && option["padding"] == false){
			this.optEtc(myinput);
		}
		if(option["color"] == true){
			this.optColor(myinput);
		}
		if(option["font"] == true){
			this.optFont(myinput);
		}
		if(option["etc"] == true && option["padding"] == true){
			this.splitPadding(myinput);
			this.optEtc(myinput);
			this.optPadding(myinput);
		}
		if(option["etc"] == false && option["padding"] == true){
			this.splitPadding(myinput);
			this.optPadding(myinput);
		}
	};

	this.optimize(input);
};
