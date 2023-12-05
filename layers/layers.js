var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_Gmps_1 = new ol.layer.Tile({
            'title': 'Gmps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_Rehecho_2 = new ol.format.GeoJSON();
var features_Rehecho_2 = format_Rehecho_2.readFeatures(json_Rehecho_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rehecho_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rehecho_2.addFeatures(features_Rehecho_2);
var lyr_Rehecho_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rehecho_2, 
                style: style_Rehecho_2,
                interactive: true,
                title: '<img src="styles/legend/Rehecho_2.png" /> Rehecho'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Gmps_1.setVisible(true);lyr_Rehecho_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Gmps_1,lyr_Rehecho_2];
lyr_Rehecho_2.set('fieldAliases', {'ID': 'ID', 'Exp': 'Exp', 'Col': 'Col', 'Calle': 'Calle', 'Coord': 'Coord', 'Lat': 'Lat', 'Long': 'Long', 'Sexo1': 'Sexo1', 'Sexo2': 'Sexo2', 'Edad': 'Edad', 'tipo TB': 'tipo TB', 'Rx': 'Rx', 'Interpretación': 'Interpretación', 'BAAR': 'BAAR', 'COMBE': 'COMBE', 'Comorbilidad': 'Comorbilidad', 'BCG': 'BCG', 'Mes': 'Mes', 'Año': 'Año', 'Estado Tx': 'Estado Tx', });
lyr_Rehecho_2.set('fieldImages', {'ID': '', 'Exp': '', 'Col': '', 'Calle': '', 'Coord': '', 'Lat': '', 'Long': '', 'Sexo1': '', 'Sexo2': '', 'Edad': '', 'tipo TB': '', 'Rx': '', 'Interpretación': '', 'BAAR': '', 'COMBE': '', 'Comorbilidad': '', 'BCG': '', 'Mes': '', 'Año': '', 'Estado Tx': '', });
lyr_Rehecho_2.set('fieldLabels', {'ID': 'inline label', 'Exp': 'no label', 'Col': 'no label', 'Calle': 'no label', 'Coord': 'no label', 'Lat': 'no label', 'Long': 'no label', 'Sexo1': 'inline label', 'Sexo2': 'inline label', 'Edad': 'inline label', 'tipo TB': 'inline label', 'Rx': 'inline label', 'Interpretación': 'inline label', 'BAAR': 'inline label', 'COMBE': 'inline label', 'Comorbilidad': 'inline label', 'BCG': 'inline label', 'Mes': 'inline label', 'Año': 'inline label', 'Estado Tx': 'inline label', });
lyr_Rehecho_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});