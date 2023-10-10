//var long = document.getElementById("49131").innerHTML
//var lat = document.getElementById("-123091").innerHTML

var directions = document.getElementsByClassName("location-block")[0].innerHTML
//var longandlat = directions.match(/(\d+(?:\.\d+)?)/g);

var longandlat = directions.match(/(-?\d+(?:\.\d+)?)/g);

var long = longandlat[0]
var lat = longandlat[1]

//alert (long + "" + lat)
//document.getElementById('google-map-location').innerHTML = long + " " + lat;

document.getElementById('google-map-location').innerHTML = "<object type=\"text/html\" data=\"https://maps.google.com/maps?q=" + long + "," + lat + "\"" + "style=\"width:1400px; height:400px\"><p>backup content</p></object>";