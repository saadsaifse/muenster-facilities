//import L from 'leaflet'
//import 'leaflet/dist/leaflet.css'
import config from '../src/config'
import './style.css'
import * as icons from './icons'

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

let radiusCircle

map.on('click', e => {
    if (map.hasLayer(radiusCircle)) map.removeLayer(radiusCircle)
    const radius = prompt(
        'How far you feel like going around you?',
        parseFloat(1)
    )
    radiusCircle = L.circle(e.latlng, { radius: radius }).addTo(map)
    const features = getFeaturesInRadius(e.latlng, radius)
    const children = features.map(feature => {
        return feature.id
        // console.log(feature.id)
        // return `<div class="list-item">${feature.id}</div>`
    })
    alert(`Feature IDs found in radius are:\n ${children}`)
    //console.log(children)
    //document.getElementById('list').innerHTML = children
})

const getFeaturesInRadius = (latlng, radius) => {
    const featuresWithinTheRadius = []
    map.eachLayer(layer => {
        if (layer instanceof L.Marker) {
            const featureLatLng = layer.getLatLng()
            const distance = featureLatLng.distanceTo(latlng)
            if (distance <= radius) {
                featuresWithinTheRadius.push(layer.feature)
            }
        }
    })
    return featuresWithinTheRadius
}

const addSwimmingFeatures = () => {
    fetch(config.baeder)
        .then(response => response.json())
        .then(d =>
            L.geoJSON(d, {
                pointToLayer: function(feature, latlng) {
                    return L.marker(latlng, {
                        icon: icons.swimming,
                    })
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

addSwimmingFeatures()
