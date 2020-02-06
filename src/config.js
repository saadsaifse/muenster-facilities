const config = {
    baeder:
        'http://localhost:8080/geoserver/SII/ows?service=WFS&version=1.1.0&request=GetFeature&typeName=SII:Baeder&srsName=EPSG:4326&format=text/javascript&outputFormat=json&format_options=callback:loadGeoJson',
    behoerden:
        'http://localhost:8080/geoserver/SII/ows?service=WFS&version=1.1.0&request=GetFeature&typeName=SII:Behoerden&srsName=EPSG:4326&format=text/javascript&outputFormat=json&format_options=callback:loadGeoJson',
    buecherbus: 
 		'http://localhost:8080/geoserver/SII/ows?service=WFS&version=1.1.0&request=GetFeature&typeName=SII:Buecherbus&srsName=EPSG:4326&format=text/javascript&outputFormat=json&format_options=callback:loadGeoJson',   
 	glasscontainer:
 		'http://localhost:8080/geoserver/SII/ows?service=WFS&version=1.1.0&request=GetFeature&typeName=SII:Glascontainer&srsName=EPSG:4326&format=text/javascript&outputFormat=json&format_options=callback:loadGeoJson',
	hotel:	
 		'http://localhost:8080/geoserver/SII/ows?service=WFS&version=1.1.0&request=GetFeature&typeName=SII:Hotels&srs=EPSG:4326&format=text/javascript&outputFormat=json&format_options=callback:loadGeoJson',
 	cinema:
 		'http://localhost:8080/geoserver/SII/ows?service=WFS&version=1.1.0&request=GetFeature&typeName=SII:Kino&srs=EPSG:4326&format=text/javascript&outputFormat=json&format_options=callback:loadGeoJson',
 	clinic:
 		'http://localhost:8080/geoserver/SII/ows?service=WFS&version=1.1.0&request=GetFeature&typeName=SII:Krankenhaeuser&srs=EPSG:4326&format=text/javascript&outputFormat=json&format_options=callback:loadGeoJson',
 	museum:
 		'http://localhost:8080/geoserver/SII/ows?service=WFS&version=1.1.0&request=GetFeature&typeName=SII:Museen&srs=EPSG:4326&format=text/javascript&outputFormat=json&format_options=callback:loadGeoJson',
 	paper:
 		'http://localhost:8080/geoserver/SII/ows?service=WFS&version=1.1.0&request=GetFeature&typeName=SII:Papierkorb&srs=EPSG:4326&format=text/javascript&outputFormat=json&format_options=callback:loadGeoJson',
 	school:
 	'http://localhost:8080/geoserver/SII/ows?service=WFS&version=1.1.0&request=GetFeature&typeName=SII:Schulen&srs=EPSG:4326&format=text/javascript&outputFormat=json&format_options=callback:loadGeoJson',
 	theater:
 		'http://localhost:8080/geoserver/SII/ows?service=WFS&version=1.1.0&request=GetFeature&typeName=SII:Theater&srs=EPSG:4326&format=text/javascript&outputFormat=json&format_options=callback:loadGeoJson',
 	toilet:
 	'http://localhost:8080/geoserver/SII/ows?service=WFS&version=1.1.0&request=GetFeature&typeName=SII:Toiletten&srs=EPSG:4326&format=text/javascript&outputFormat=json&format_options=callback:loadGeoJson',
 	preschool:
 		'http://localhost:8080/geoserver/SII/ows?service=WFS&version=1.1.0&request=GetFeature&typeName=SII:kitas01&srs=EPSG:4326&format=text/javascript&outputFormat=json&format_options=callback:loadGeoJson',
 	playground:
 		'http://localhost:8080/geoserver/SII/ows?service=WFS&version=1.1.0&request=GetFeature&typeName=SII:spielplaetze&srs=EPSG:4326&format=text/javascript&outputFormat=json&format_options=callback:loadGeoJson',		
 	sport:
 		'http://localhost:8080/geoserver/SII/ows?service=WFS&version=1.1.0&request=GetFeature&typeName=SII:sportstaetten&srs=EPSG:4326&format=text/javascript&outputFormat=json&format_options=callback:loadGeoJson',
 		
}


export default config
