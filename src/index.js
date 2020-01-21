import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import config from '../src/config'
import './style.css'
import * as icons from './icons'

// hack to display the marker, as found at https://github.com/PaulLeCam/react-leaflet/issues/453#issuecomment-410450387
delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('../images/swim.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
})

const map = L.map(document.getElementById('mapid')).setView(
    [51.961265, 7.626067],
    13
)

L.tileLayer(
    'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
    {
        attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        accessToken:
            'pk.eyJ1IjoibXNhYWRzYWlmNSIsImEiOiJjazExNmFvNTcwYzc0M2hxZDZqeWo3YnRpIn0.pQRwgsZ9jURJKiMUIoqPWg',
    }
).addTo(map)

const geojsonMarkerOptions = {
    radius: 8,
    fillColor: '#ff7800',
    color: '#000',
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8,
}

const addFeatures = () => {
    fetch(config.baeder)
        .then(response => {
            console.log(response)
            return response.json()
        })
        .then(d =>
            L.geoJSON(d, {
                pointToLayer: function(feature, latlng) {
                    return L.marker(latlng, icons.swimming)
                },
                onEachFeature: (feature, layer) => {
                    const popupContent = `<div class="baeder">
                        <h2>${feature.properties.NAME}</h2>
                        <a href="${feature.properties.LINK1}" target="blank">More Information</a>
                    </div>`
                    layer.bindPopup(popupContent)
                },
            }).addTo(map)
        )
}
// console.log(geoJson);

addFeatures()
// const geojsonFeature = {
//     "type": "Feature",
//     "properties": {
//         "name": "Coors Field",
//         "amenity": "Baseball Stadium",
//         "popupContent": "This is where the Rockies play!"
//     },
//     "geometry": {
//         "type": "Point",
//         "coordinates": [51.961265, 7.626067]
//     }
// };
