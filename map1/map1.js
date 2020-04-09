var 1 = L.map('NOLA').setView([62.18, -98.14], 8)
L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png').addTo(NOLA)
var point = L.marker([60, -90]).addTo(NOLA)
var circle = L.polygon([
  [50, -100],
  [50, -100],
  [50, -99]
]).addTo(NOLA)
circle.bindPopup('area1.')
point.bindPopup('boo.')
