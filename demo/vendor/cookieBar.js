/*!
 * CookieBar 
 * David MOTTET
 */

(function (window) {
	'use strict';

	var document = window.document, 

		cookieShop = {},


		flavor = "chocolateCookie",
		//text
		frosting = "En poursuivant votre navigation sur ce site, vous acceptez l’utilisation de cookies conformément à notre politique de données personnelles.",
		//bar
		ingerdient = "background: #161616; position: fixed; width: 100%; color: #ffffff; font-family: Helvetica, Arial, sans-serif; z-index: 1510; font-size: 12px; cursor: pointer; margin: 0 auto; min-height: 20px; line-height: 20px; text-align: center; top: 0; left: 0; right: 0;",
		//button
		chip_bottel = "position: absolute; bottom: 9px; right: 20px; width: 20px; height: 2px; background-color: #ffffff; margin: auto;",
		//cross
		spreadBlack = "-webkit-transform: rotate(45deg); -moz-transform: rotate(45deg); -o-transform: rotate(45deg); -ms-transform: rotate(45deg); transform: rotate(45deg);",
		spreadWhite = "-webkit-transform: rotate(90deg); -moz-transform: rotate(90deg); -o-transform: rotate(90deg); -ms-transform: rotate(90deg); transform: rotate(90deg); right: 0; bottom: 0;",

	init = function () {
		var brownie = tasteCookie(flavor);
		if(brownie === null) {
			showCookies();
		}
	},

	cookCookie = function (_flavor, _hunger, _size) {
		if (_size) {
			var date = new Date();
			date.setTime(date.getTime()+(_size*24*60*60*1000));
			var expires = "; expires="+date.toGMTString();
		}else{
			var expires = "";
		}
		document.cookie = _flavor+"="+_hunger+expires+"; path=/";
	},

	tasteCookie = function (_flavor) {
		var flavorEQ = _flavor + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(flavorEQ) == 0) return c.substring(flavorEQ.length,c.length);
		}
		return null;
	},

	showCookies = function () {

		var cookie = document.createElement("div");
		cookie.textContent = frosting;
		cookie.id = "cookies";
		cookie.style.cssText = ingerdient;

		var chipBlack = document.createElement("span");
		chipBlack.style.cssText = chip_bottel+spreadBlack;

		var chipWhite = document.createElement("span");
		chipWhite.style.cssText = chip_bottel+spreadWhite;

		var table = document.getElementsByTagName("body");
		chipBlack.appendChild(chipWhite);
		cookie.appendChild(chipBlack);
		table[0].appendChild(cookie);

		cookie.addEventListener("click", function () {
			table[0].removeChild(cookie);
			cookCookie(flavor,true,390);
		});
	};

	cookieShop.init = init;
	
	window.cookieShop = cookieShop;
	return cookieShop;
})(this);
