var event = require('@parrino/cordova-plugin-googlemaps.event'),
  BaseClass = require('@parrino/cordova-plugin-googlemaps.BaseClass'),
  BaseArrayClass = require('@parrino/cordova-plugin-googlemaps.BaseArrayClass'),
  execCmd = require('@parrino/cordova-plugin-googlemaps.commandQueueExecutor'),
  cordovaGoogleMaps = new(require('cordova-plugin-googlemaps.js_CordovaGoogleMaps'))(execCmd);

module.exports = {
  event: event,
  Animation: {
    BOUNCE: 'BOUNCE',
    DROP: 'DROP'
  },
  BaseClass: BaseClass,
  BaseArrayClass: BaseArrayClass,
  Map: {
    getMap: cordovaGoogleMaps.getMap.bind(cordovaGoogleMaps)
  },
  StreetView: {
    getPanorama: cordovaGoogleMaps.getPanorama.bind(cordovaGoogleMaps),
    Source: {
      DEFAULT: 'DEFAULT',
      OUTDOOR: 'OUTDOOR'
    }
  },
  HtmlInfoWindow: require('@parrino/cordova-plugin-googlemaps.HtmlInfoWindow'),
  LatLng: require('@parrino/cordova-plugin-googlemaps.LatLng'),
  LatLngBounds: require('@parrino/cordova-plugin-googlemaps.LatLngBounds'),
  MapTypeId: require('@parrino/cordova-plugin-googlemaps.MapTypeId'),
  environment: require('@parrino/cordova-plugin-googlemaps.Environment'),
  Geocoder: require('@parrino/cordova-plugin-googlemaps.Geocoder')(execCmd),
  LocationService: require('@parrino/cordova-plugin-googlemaps.LocationService')(execCmd),
  geometry: {
    encoding: require('@parrino/cordova-plugin-googlemaps.encoding'),
    spherical: require('@parrino/cordova-plugin-googlemaps.spherical'),
    poly: require('@parrino/cordova-plugin-googlemaps.poly')
  }
};

cordova.addConstructor(function () {
  if (!window.Cordova) {
    window.Cordova = cordova;
  }
  window.plugin = window.plugin || {};
  window.plugin.google = window.plugin.google || {};
  window.plugin.google.maps = window.plugin.google.maps || module.exports;
});
