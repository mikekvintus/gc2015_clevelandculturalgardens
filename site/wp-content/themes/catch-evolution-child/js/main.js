/*
 Theme Name:     Catch Evolution Child
 Theme URI:      http://catchthemes.com/themes/catch-evolution
 Description:    Catch Evolution Child Theme
 Author:         Catch Evolution Child Themes
 Author URI:     http://catchthemes.com
 Template:       catch-evolution
 Version:        1.0.0
*/

// todo: feature switch on geolocation. (browser check)
// todo: handlers for watchPosition success/fail
jQuery(document).ready(function() {
	var mapOptions = { 
			enableHighAccuracy: true,
			timeout: Infinity,
			maximumAge: 0
	};
	CleGardens.map = new google.maps.Map(document.getElementById("wpgmza_map_1"), mapOptions);
    
	  loadJS('https://google-maps-utility-library-v3.googlecode.com/svn/trunk/geolocationmarker/src/geolocationmarker-compiled.js', function() { 
		CleGardens.geoMarker = new GeolocationMarker();
		CleGardens.geoMarker.setMap(MYMAP[1].map);
	});
});

function loadJS(src,callback) {
   var s = document.createElement('script');
   s.src = src;
   s.async = true;
   s.onreadystatechange = s.onload = function() {
       var state = s.readyState;
       if (!callback.done && (!state || /loaded|complete/.test(state))) {
           callback.done = true;
           callback();
       }
   };
   document.getElementsByTagName('head')[0].appendChild(s);
}

var CleGardens = function() {
	var map = null;
	var currentPosition = null;
	var geoMarker = null;

	var success = function(position) {
		currentPosition = position;
	};
	
	var fail = function() { error({code: 1, message: "Failed on geolocation.watchPosition()"});};

	function error(err) {
	 console.warn('ERROR(' + err.code + '): ' + err.message);
	}
	
	return {success: success, error: error, map: map, position: currentPosition, geoMarker: geoMarker};
};
