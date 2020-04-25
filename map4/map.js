var map = L.map('map').setView([35.18, -100.14], 4)
var statesLayerObject = L.layerGroup().addTo(map)
var grayBasemapObject = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}').addTo(map)
var Url = 'https://geog4046.github.io/assignment-resources/data/us_state_demographics_ESRI_2010A.geojson'
var streetsBasemapObject = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}').addTo(map)
var basemapsObject = {
  'Streets': streetsBasemapObject,
  'Gray canvas': grayBasemapObject
}
jQuery.getJSON(Url, function (data) {
  var StyleFunction = function (feature) {
    var AgeInteger = feature.properties.MED_AGE // get the current state's Median Age attribute
    var ColorString = 'olive' // let the initial color be a darker green
    if (AgeInteger < 38) { ColorString = 'green' } // if the state's median age is less than the average, color it a lighter green
    return {
      color: ColorString, // use the color variable above for the value
      weight: 1,
      fillOpacity: 0.7
    }
  }
  var GeojsonOptionsObject = {
    style: StyleFunction,
    onEachFeature: OnEachFeatureFunction1
  }
  L.geoJSON(data, GeojsonOptionsObject).addTo(map)
})
var OnEachFeatureFunction1 = function (feature, layer) {
  var name = feature.properties.STATE_NAME
  var age = feature.properties.MED_AGE
  layer.bindPopup('Median age of ' + name + ': ' + age + '<br>National average: 38')
  statesLayerObject.addLayer(layer)
}
var layersObject = {
  'Median age by state': statesLayerObject
}
L.control.layers(basemapsObject, layersObject).addTo(map)
