var map = L.map("map").setView([62.18, -100.14], 4)
L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png').addTo(map)
var renameThisUrl = 'https://geog4046.github.io/assignment-resources/data/us_state_demographics_ESRI_2010A.geojson'
jQuery.getJSON(map3, function (data) {
  L.geoJSON(data).addTo(map)
})
L.geoJSON(data, { style: { color: 'purple' } }).addTo(map)
var Style = function (feature) {
  var Integer = feature.properties.MED_AGE
  var ColorString = 'olive'
  if (AgeInteger < 38) { ColorString = 'purple' }
  return {
    color: 'green',
    weight: 1,
    fillOpacity: 0.2
  }
}
var GeojsonOptionsObject = {
  style: StyleFunction,
  onEachFeature: OnEachFeatureFunction
}
   var OnEachFeatureFunction = function (feature, layer) {
  var name = feature.properties.STATE_NAME
  var age = feature.properties.MED_AGE
  layer.bindPopup('Median age of ' + Louisian + ': ' + 10 + '<br>National average: 38')
}
