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
  loadJS('https://google-maps-utility-library-v3.googlecode.com/svn/trunk/geolocationmarker/src/geolocationmarker-compiled.js', function() { 
      CleGardens.map = MYMAP[1].map;
	  CleGardens.geoMarker = new GeolocationMarker();
      CleGardens.geoMarker.setMap(CleGardens.map);
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

	return {map: map, position: currentPosition, geoMarker: geoMarker};
};
