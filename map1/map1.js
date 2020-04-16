var map1 = L.map("map1").setView([62.18, -100.14], 4)
L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png').addTo("map1")
var point1 = L.marker([60, -100]).addTo("map1")
var Circle = L.polygon([
  [61, -88],
  [65, -88],
  [52, -82]
]).addTo("map1")
Circle.bindPopup('Hi')
point1.bindPopup('Boo')
