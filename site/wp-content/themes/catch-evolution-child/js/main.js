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
  loadJS('https://google-maps-utility-library-v3.googlecode.com/svn/trunk/geolocationmarker/src/geolocationmarker-compiled.js', function () {
      for (var i = 0; i < MYMAP.length; i++) {
          if (MYMAP[i]) {
              CleGardens.map = MYMAP[i].map;
              break;
          }
      }

	    CleGardens.geoMarker = new GeolocationMarker();
      CleGardens.geoMarker.setMap(CleGardens.map);

      var centerControlDiv = document.createElement('div');
      var centerControl = CenterControl(centerControlDiv);
      CleGardens.map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(centerControlDiv);
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

var CleGardens = (function() {
	var map = null;
	var currentPosition = null;
	var geoMarker = null;

	var centerView = function() {
	  if (CleGardens.map && CleGardens.geoMarker) {
	    CleGardens.map.setZoom(17);
         	CleGardens.map.setCenter(CleGardens.geoMarker.getPosition());
      }
	}

	return {
			map: map, position: currentPosition, geoMarker: geoMarker,
			centerOnCurrentLocation: centerView};
}());

function CenterControl(controlDiv) {
    var controlUI = document.createElement('div');
    controlUI.style.backgroundColor = '#fff';
    controlUI.style.border = '2px solid #fff';
    controlUI.style.borderRadius = '3px';
    controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
    controlUI.style.cursor = 'pointer';
    controlUI.style.marginBottom = '22px';
    controlUI.style.textAlign = 'center';
    controlUI.title = 'Click to recenter the map';
    controlDiv.appendChild(controlUI);

    var controlText = document.createElement('div');
    controlText.style.color = 'rgb(25,25,25)';
    controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
    controlText.style.fontSize = '16px';
    controlText.style.lineHeight = '38px';
    controlText.style.paddingLeft = '5px';
    controlText.style.paddingRight = '5px';
    controlText.innerHTML = 'Center Map';
    controlUI.appendChild(controlText);

    google.maps.event.addDomListener(controlUI, 'click', function() {
        CleGardens.centerOnCurrentLocation();
    });      
}

