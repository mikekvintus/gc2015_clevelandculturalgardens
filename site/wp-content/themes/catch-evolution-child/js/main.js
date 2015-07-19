/*
 Theme Name:     Catch Evolution Child
 Theme URI:      http://catchthemes.com/themes/catch-evolution
 Description:    Catch Evolution Child Theme
 Author:         Catch Evolution Child Themes
 Author URI:     http://catchthemes.com
 Template:       catch-evolution
 Version:        1.0.0
*/

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
	var geoMarker = null;

	var currentPosition = function () {
    if (CleGardens.geoMarker) {
      return CleGardens.geoMarker.getPosition();
    }

    if (map) {
      return map.getCurrentPosition();
    }

	  return null;
	};

	var centerView = function() {
	  if (CleGardens.map && CleGardens.geoMarker) {
	    var firstMap = document.getElementsByClassName('wpgmza_map')[0];
	    if (firstMap.offsetWidth > 1024) {
	      CleGardens.map.setZoom(15); // Desktop
	    } else {
	      CleGardens.map.setZoom(17); // Mobile (roughly)
	    }
	    CleGardens.map.setCenter(CleGardens.position());
      }
	}

	return {
			map: map, position: currentPosition, geoMarker: geoMarker,
			centerOnCurrentLocation: centerView};
}());

function CenterControl(controlDiv) {
  var controlUI = document.createElement('div');
    controlUI.setAttribute('class','CenterViewControlUI');
    controlUI.title = 'Click to recenter the map';
    controlDiv.appendChild(controlUI);

    google.maps.event.addDomListener(controlUI, 'click', function() {
        CleGardens.centerOnCurrentLocation();
    });      
}

