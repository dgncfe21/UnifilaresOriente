var wms_layers = [];


        var lyr_CartoDark_0 = new ol.layer.Tile({
            'title': 'Carto Dark',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_LINEA_FIG_2 = new ol.format.GeoJSON();
var features_LINEA_FIG_2 = format_LINEA_FIG_2.readFeatures(json_LINEA_FIG_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LINEA_FIG_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LINEA_FIG_2.addFeatures(features_LINEA_FIG_2);
var lyr_LINEA_FIG_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LINEA_FIG_2, 
                style: style_LINEA_FIG_2,
                interactive: true,
                title: '<img src="styles/legend/LINEA_FIG_2.png" /> LINEA_FIG'
            });
var format_SE_FIG_3 = new ol.format.GeoJSON();
var features_SE_FIG_3 = format_SE_FIG_3.readFeatures(json_SE_FIG_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SE_FIG_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SE_FIG_3.addFeatures(features_SE_FIG_3);
var lyr_SE_FIG_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SE_FIG_3, 
                style: style_SE_FIG_3,
                interactive: false,
                title: '<img src="styles/legend/SE_FIG_3.png" /> SE_FIG'
            });
var format_desc_fig_4 = new ol.format.GeoJSON();
var features_desc_fig_4 = format_desc_fig_4.readFeatures(json_desc_fig_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_desc_fig_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_desc_fig_4.addFeatures(features_desc_fig_4);
var lyr_desc_fig_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_desc_fig_4, 
                style: style_desc_fig_4,
                interactive: false,
    title: 'desc_fig<br />\
    <img src="styles/legend/desc_fig_4_0.png" /> NA<br />\
    <img src="styles/legend/desc_fig_4_1.png" /> NC<br />\
    <img src="styles/legend/desc_fig_4_2.png" /> <br />'
        });
var format_capacit_fig_5 = new ol.format.GeoJSON();
var features_capacit_fig_5 = format_capacit_fig_5.readFeatures(json_capacit_fig_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_capacit_fig_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_capacit_fig_5.addFeatures(features_capacit_fig_5);
var lyr_capacit_fig_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_capacit_fig_5, 
                style: style_capacit_fig_5,
                interactive: false,
                title: '<img src="styles/legend/capacit_fig_5.png" /> capacit_fig'
            });
var format_eprosec_fig_6 = new ol.format.GeoJSON();
var features_eprosec_fig_6 = format_eprosec_fig_6.readFeatures(json_eprosec_fig_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_eprosec_fig_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_eprosec_fig_6.addFeatures(features_eprosec_fig_6);
var lyr_eprosec_fig_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_eprosec_fig_6, 
                style: style_eprosec_fig_6,
                interactive: false,
                title: '<img src="styles/legend/eprosec_fig_6.png" /> eprosec_fig'
            });
var format_FUSIBLES_FIG_7 = new ol.format.GeoJSON();
var features_FUSIBLES_FIG_7 = format_FUSIBLES_FIG_7.readFeatures(json_FUSIBLES_FIG_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FUSIBLES_FIG_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FUSIBLES_FIG_7.addFeatures(features_FUSIBLES_FIG_7);
var lyr_FUSIBLES_FIG_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FUSIBLES_FIG_7, 
                style: style_FUSIBLES_FIG_7,
                interactive: false,
    title: 'FUSIBLES_FIG<br />\
    <img src="styles/legend/FUSIBLES_FIG_7_0.png" /> NA<br />\
    <img src="styles/legend/FUSIBLES_FIG_7_1.png" /> NC<br />\
    <img src="styles/legend/FUSIBLES_FIG_7_2.png" /> <br />'
        });

lyr_CartoDark_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_LINEA_FIG_2.setVisible(true);lyr_SE_FIG_3.setVisible(true);lyr_desc_fig_4.setVisible(true);lyr_capacit_fig_5.setVisible(true);lyr_eprosec_fig_6.setVisible(true);lyr_FUSIBLES_FIG_7.setVisible(true);
var layersList = [lyr_CartoDark_0,lyr_OSMStandard_1,lyr_LINEA_FIG_2,lyr_SE_FIG_3,lyr_desc_fig_4,lyr_capacit_fig_5,lyr_eprosec_fig_6,lyr_FUSIBLES_FIG_7];
lyr_LINEA_FIG_2.set('fieldAliases', {'DIV': 'DIV', 'ZONA': 'ZONA', 'X1': 'X1', 'Y1': 'Y1', 'X2': 'X2', 'Y2': 'Y2', 'UNICO': 'UNICO', 'IDENTIFICA': 'IDENTIFICA', 'DESCRIPCIO': 'DESCRIPCIO', 'FASES_CON': 'FASES_CON', 'CIRCUITO': 'CIRCUITO', 'IDCADPAD': 'IDCADPAD', 'UBICA': 'UBICA', 'DIRX': 'DIRX', 'DIRY': 'DIRY', 'FASES': 'FASES', 'LOC': 'LOC', 'LONG': 'LONG', 'FIBRA': 'FIBRA', 'FEC_ACT': 'FEC_ACT', 'OBSERVACIO': 'OBSERVACIO', 'ACOMETIDA': 'ACOMETIDA', 'FEC_INS': 'FEC_INS', 'TRONCAL': 'TRONCAL', 'ANIO': 'ANIO', 'NOOBRA': 'NOOBRA', 'IDOBRA': 'IDOBRA', 'TIPOOB': 'TIPOOB', 'GUARDA': 'GUARDA', });
lyr_SE_FIG_3.set('fieldAliases', {'qc_id': 'qc_id', 'name': 'name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudemo': 'altitudemo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'draworder': 'draworder', 'icon': 'icon', });
lyr_desc_fig_4.set('fieldAliases', {'DIV': 'DIV', 'ZONA': 'ZONA', 'NE': 'NE', 'IDENTIFICA': 'IDENTIFICA', 'FASES_CON': 'FASES_CON', 'CAPACIDAD': 'CAPACIDAD', 'ESTADO': 'ESTADO', 'IDCADPAD': 'IDCADPAD', 'X': 'X', 'Y': 'Y', 'NX': 'NX', 'NY': 'NY', 'CANTIDAD': 'CANTIDAD', 'LOC': 'LOC', 'SYM': 'SYM', 'FEC_ACT': 'FEC_ACT', 'OBSERVACIO': 'OBSERVACIO', 'UTR': 'UTR', 'FEC_INS': 'FEC_INS', 'ANIO': 'ANIO', 'NOOBRA': 'NOOBRA', 'IDOBRA': 'IDOBRA', 'TIPOOB': 'TIPOOB', 'DIV_2': 'DIV_2', 'ZONA_2': 'ZONA_2', 'X1': 'X1', 'Y1': 'Y1', 'X2': 'X2', 'Y2': 'Y2', 'UNICO': 'UNICO', 'IDENTIFI_1': 'IDENTIFI_1', 'DESCRIPCIO': 'DESCRIPCIO', 'FASES_CON_': 'FASES_CON_', 'CIRCUITO': 'CIRCUITO', 'IDCADPAD_2': 'IDCADPAD_2', 'UBICA': 'UBICA', 'DIRX': 'DIRX', 'DIRY': 'DIRY', 'FASES': 'FASES', 'LOC_2': 'LOC_2', 'LONG': 'LONG', 'FIBRA': 'FIBRA', 'FEC_ACT_2': 'FEC_ACT_2', 'OBSERVAC_1': 'OBSERVAC_1', 'ACOMETIDA': 'ACOMETIDA', 'FEC_INS_2': 'FEC_INS_2', 'TRONCAL': 'TRONCAL', 'ANIO_2': 'ANIO_2', 'NOOBRA_2': 'NOOBRA_2', 'IDOBRA_2': 'IDOBRA_2', 'TIPOOB_2': 'TIPOOB_2', 'GUARDA': 'GUARDA', });
lyr_capacit_fig_5.set('fieldAliases', {'DIV': 'DIV', 'ZONA': 'ZONA', 'NE': 'NE', 'IDENTIFICA': 'IDENTIFICA', 'TIPO_BANCO': 'TIPO_BANCO', 'T': 'T', 'TIPO_CONEX': 'TIPO_CONEX', 'X': 'X', 'Y': 'Y', 'IDCADPAD': 'IDCADPAD', 'LOC': 'LOC', 'CONTROL': 'CONTROL', 'EQUIPO': 'EQUIPO', 'INCREM': 'INCREM', 'FEC_ACT': 'FEC_ACT', 'OBSERVACIO': 'OBSERVACIO', 'FEC_INS': 'FEC_INS', 'ANIO': 'ANIO', 'NOOBRA': 'NOOBRA', 'IDOBRA': 'IDOBRA', 'TIPOOB': 'TIPOOB', 'DIV_2': 'DIV_2', 'ZONA_2': 'ZONA_2', 'X1': 'X1', 'Y1': 'Y1', 'X2': 'X2', 'Y2': 'Y2', 'UNICO': 'UNICO', 'IDENTIFI_1': 'IDENTIFI_1', 'DESCRIPCIO': 'DESCRIPCIO', 'FASES_CON': 'FASES_CON', 'CIRCUITO': 'CIRCUITO', 'IDCADPAD_2': 'IDCADPAD_2', 'UBICA': 'UBICA', 'DIRX': 'DIRX', 'DIRY': 'DIRY', 'FASES': 'FASES', 'LOC_2': 'LOC_2', 'LONG': 'LONG', 'FIBRA': 'FIBRA', 'FEC_ACT_2': 'FEC_ACT_2', 'OBSERVAC_1': 'OBSERVAC_1', 'ACOMETIDA': 'ACOMETIDA', 'FEC_INS_2': 'FEC_INS_2', 'TRONCAL': 'TRONCAL', 'ANIO_2': 'ANIO_2', 'NOOBRA_2': 'NOOBRA_2', 'IDOBRA_2': 'IDOBRA_2', 'TIPOOB_2': 'TIPOOB_2', 'GUARDA': 'GUARDA', });
lyr_eprosec_fig_6.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', 'NE': 'NE', 'CIRCUITO': 'CIRCUITO', 'TIPO_EQUIP': 'TIPO_EQUIP', 'ENLACE': 'ENLACE', 'LAT': 'LAT', 'LON': 'LON', 'OID': 'OID', 'INICIO': 'INICIO', 'TERMINO': 'TERMINO', 'circuito_1': 'circuito_1', 'EQUIPO': 'EQUIPO', 'EVENTOS': 'EVENTOS', 'MW': 'MW', 'CLIENTE': 'CLIENTE', 'ZONA': 'ZONA', 'FECHA': 'FECHA', 'COD_FALLA': 'COD_FALLA', });
lyr_FUSIBLES_FIG_7.set('fieldAliases', {'DIV': 'DIV', 'ZONA': 'ZONA', 'IDENTIFICA': 'IDENTIFICA', 'NE': 'NE', 'FASES_CON': 'FASES_CON', 'CANTIDAD': 'CANTIDAD', 'IDCADPAD': 'IDCADPAD', 'CAPACIDAD': 'CAPACIDAD', 'ESTADO': 'ESTADO', 'X': 'X', 'Y': 'Y', 'NX': 'NX', 'NY': 'NY', 'ACOMETIDA': 'ACOMETIDA', 'LOC': 'LOC', 'TIPO': 'TIPO', 'VELOCIDAD': 'VELOCIDAD', 'TRESDISPAR': 'TRESDISPAR', 'FEC_ACT': 'FEC_ACT', 'OBSERVACIO': 'OBSERVACIO', 'FEC_INS': 'FEC_INS', 'ANIO': 'ANIO', 'NOOBRA': 'NOOBRA', 'IDOBRA': 'IDOBRA', 'TIPOOB': 'TIPOOB', 'DIV_2': 'DIV_2', 'ZONA_2': 'ZONA_2', 'X1': 'X1', 'Y1': 'Y1', 'X2': 'X2', 'Y2': 'Y2', 'UNICO': 'UNICO', 'IDENTIFI_1': 'IDENTIFI_1', 'DESCRIPCIO': 'DESCRIPCIO', 'FASES_CON_': 'FASES_CON_', 'CIRCUITO': 'CIRCUITO', 'IDCADPAD_2': 'IDCADPAD_2', 'UBICA': 'UBICA', 'DIRX': 'DIRX', 'DIRY': 'DIRY', 'FASES': 'FASES', 'LOC_2': 'LOC_2', 'LONG': 'LONG', 'FIBRA': 'FIBRA', 'FEC_ACT_2': 'FEC_ACT_2', 'OBSERVAC_1': 'OBSERVAC_1', 'ACOMETIDA_': 'ACOMETIDA_', 'FEC_INS_2': 'FEC_INS_2', 'TRONCAL': 'TRONCAL', 'ANIO_2': 'ANIO_2', 'NOOBRA_2': 'NOOBRA_2', 'IDOBRA_2': 'IDOBRA_2', 'TIPOOB_2': 'TIPOOB_2', 'GUARDA': 'GUARDA', });
lyr_LINEA_FIG_2.set('fieldImages', {'DIV': 'TextEdit', 'ZONA': 'TextEdit', 'X1': 'TextEdit', 'Y1': 'TextEdit', 'X2': 'TextEdit', 'Y2': 'TextEdit', 'UNICO': 'TextEdit', 'IDENTIFICA': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'FASES_CON': 'TextEdit', 'CIRCUITO': 'TextEdit', 'IDCADPAD': 'TextEdit', 'UBICA': 'TextEdit', 'DIRX': 'TextEdit', 'DIRY': 'TextEdit', 'FASES': 'TextEdit', 'LOC': 'TextEdit', 'LONG': 'TextEdit', 'FIBRA': 'TextEdit', 'FEC_ACT': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'ACOMETIDA': 'TextEdit', 'FEC_INS': 'TextEdit', 'TRONCAL': 'TextEdit', 'ANIO': 'TextEdit', 'NOOBRA': 'TextEdit', 'IDOBRA': 'TextEdit', 'TIPOOB': 'TextEdit', 'GUARDA': 'TextEdit', });
lyr_SE_FIG_3.set('fieldImages', {'qc_id': 'TextEdit', 'name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudemo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'draworder': 'TextEdit', 'icon': 'TextEdit', });
lyr_desc_fig_4.set('fieldImages', {'DIV': 'TextEdit', 'ZONA': 'TextEdit', 'NE': 'TextEdit', 'IDENTIFICA': 'TextEdit', 'FASES_CON': 'TextEdit', 'CAPACIDAD': 'Range', 'ESTADO': 'TextEdit', 'IDCADPAD': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'NX': 'TextEdit', 'NY': 'TextEdit', 'CANTIDAD': 'Range', 'LOC': 'TextEdit', 'SYM': 'TextEdit', 'FEC_ACT': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'UTR': 'TextEdit', 'FEC_INS': 'TextEdit', 'ANIO': 'TextEdit', 'NOOBRA': 'TextEdit', 'IDOBRA': 'TextEdit', 'TIPOOB': 'TextEdit', 'DIV_2': 'TextEdit', 'ZONA_2': 'TextEdit', 'X1': 'TextEdit', 'Y1': 'TextEdit', 'X2': 'TextEdit', 'Y2': 'TextEdit', 'UNICO': 'TextEdit', 'IDENTIFI_1': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'FASES_CON_': 'TextEdit', 'CIRCUITO': 'TextEdit', 'IDCADPAD_2': 'TextEdit', 'UBICA': 'TextEdit', 'DIRX': 'TextEdit', 'DIRY': 'TextEdit', 'FASES': 'TextEdit', 'LOC_2': 'TextEdit', 'LONG': 'TextEdit', 'FIBRA': 'TextEdit', 'FEC_ACT_2': 'TextEdit', 'OBSERVAC_1': 'TextEdit', 'ACOMETIDA': 'TextEdit', 'FEC_INS_2': 'TextEdit', 'TRONCAL': 'TextEdit', 'ANIO_2': 'TextEdit', 'NOOBRA_2': 'TextEdit', 'IDOBRA_2': 'TextEdit', 'TIPOOB_2': 'TextEdit', 'GUARDA': 'TextEdit', });
lyr_capacit_fig_5.set('fieldImages', {'DIV': 'TextEdit', 'ZONA': 'TextEdit', 'NE': 'TextEdit', 'IDENTIFICA': 'TextEdit', 'TIPO_BANCO': 'TextEdit', 'T': 'TextEdit', 'TIPO_CONEX': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'IDCADPAD': 'TextEdit', 'LOC': 'TextEdit', 'CONTROL': 'TextEdit', 'EQUIPO': 'TextEdit', 'INCREM': 'TextEdit', 'FEC_ACT': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'FEC_INS': 'TextEdit', 'ANIO': 'TextEdit', 'NOOBRA': 'TextEdit', 'IDOBRA': 'TextEdit', 'TIPOOB': 'TextEdit', 'DIV_2': 'TextEdit', 'ZONA_2': 'TextEdit', 'X1': 'TextEdit', 'Y1': 'TextEdit', 'X2': 'TextEdit', 'Y2': 'TextEdit', 'UNICO': 'TextEdit', 'IDENTIFI_1': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'FASES_CON': 'TextEdit', 'CIRCUITO': 'TextEdit', 'IDCADPAD_2': 'TextEdit', 'UBICA': 'TextEdit', 'DIRX': 'TextEdit', 'DIRY': 'TextEdit', 'FASES': 'TextEdit', 'LOC_2': 'TextEdit', 'LONG': 'TextEdit', 'FIBRA': 'TextEdit', 'FEC_ACT_2': 'TextEdit', 'OBSERVAC_1': 'TextEdit', 'ACOMETIDA': 'TextEdit', 'FEC_INS_2': 'TextEdit', 'TRONCAL': 'TextEdit', 'ANIO_2': 'TextEdit', 'NOOBRA_2': 'TextEdit', 'IDOBRA_2': 'TextEdit', 'TIPOOB_2': 'TextEdit', 'GUARDA': 'TextEdit', });
lyr_eprosec_fig_6.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'snippet': 'TextEdit', 'NE': 'TextEdit', 'CIRCUITO': 'TextEdit', 'TIPO_EQUIP': 'TextEdit', 'ENLACE': 'TextEdit', 'LAT': 'TextEdit', 'LON': 'TextEdit', 'OID': 'TextEdit', 'INICIO': 'TextEdit', 'TERMINO': 'TextEdit', 'circuito_1': 'TextEdit', 'EQUIPO': 'TextEdit', 'EVENTOS': 'TextEdit', 'MW': 'TextEdit', 'CLIENTE': 'TextEdit', 'ZONA': 'TextEdit', 'FECHA': 'TextEdit', 'COD_FALLA': 'TextEdit', });
lyr_FUSIBLES_FIG_7.set('fieldImages', {'DIV': 'TextEdit', 'ZONA': 'TextEdit', 'IDENTIFICA': 'TextEdit', 'NE': 'TextEdit', 'FASES_CON': 'TextEdit', 'CANTIDAD': 'Range', 'IDCADPAD': 'TextEdit', 'CAPACIDAD': 'Range', 'ESTADO': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'NX': 'TextEdit', 'NY': 'TextEdit', 'ACOMETIDA': 'TextEdit', 'LOC': 'TextEdit', 'TIPO': 'TextEdit', 'VELOCIDAD': 'TextEdit', 'TRESDISPAR': 'TextEdit', 'FEC_ACT': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'FEC_INS': 'TextEdit', 'ANIO': 'TextEdit', 'NOOBRA': 'TextEdit', 'IDOBRA': 'TextEdit', 'TIPOOB': 'TextEdit', 'DIV_2': 'TextEdit', 'ZONA_2': 'TextEdit', 'X1': 'TextEdit', 'Y1': 'TextEdit', 'X2': 'TextEdit', 'Y2': 'TextEdit', 'UNICO': 'TextEdit', 'IDENTIFI_1': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'FASES_CON_': 'TextEdit', 'CIRCUITO': 'TextEdit', 'IDCADPAD_2': 'TextEdit', 'UBICA': 'TextEdit', 'DIRX': 'TextEdit', 'DIRY': 'TextEdit', 'FASES': 'TextEdit', 'LOC_2': 'TextEdit', 'LONG': 'TextEdit', 'FIBRA': 'TextEdit', 'FEC_ACT_2': 'TextEdit', 'OBSERVAC_1': 'TextEdit', 'ACOMETIDA_': 'TextEdit', 'FEC_INS_2': 'TextEdit', 'TRONCAL': 'TextEdit', 'ANIO_2': 'TextEdit', 'NOOBRA_2': 'TextEdit', 'IDOBRA_2': 'TextEdit', 'TIPOOB_2': 'TextEdit', 'GUARDA': 'TextEdit', });
lyr_LINEA_FIG_2.set('fieldLabels', {'DIV': 'no label', 'ZONA': 'no label', 'X1': 'no label', 'Y1': 'no label', 'X2': 'no label', 'Y2': 'no label', 'UNICO': 'no label', 'IDENTIFICA': 'no label', 'DESCRIPCIO': 'no label', 'FASES_CON': 'no label', 'CIRCUITO': 'header label', 'IDCADPAD': 'no label', 'UBICA': 'no label', 'DIRX': 'no label', 'DIRY': 'no label', 'FASES': 'no label', 'LOC': 'no label', 'LONG': 'no label', 'FIBRA': 'no label', 'FEC_ACT': 'no label', 'OBSERVACIO': 'no label', 'ACOMETIDA': 'no label', 'FEC_INS': 'no label', 'TRONCAL': 'no label', 'ANIO': 'no label', 'NOOBRA': 'no label', 'IDOBRA': 'no label', 'TIPOOB': 'no label', 'GUARDA': 'no label', });
lyr_SE_FIG_3.set('fieldLabels', {'qc_id': 'no label', 'name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudemo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'draworder': 'no label', 'icon': 'no label', });
lyr_desc_fig_4.set('fieldLabels', {'DIV': 'no label', 'ZONA': 'no label', 'NE': 'no label', 'IDENTIFICA': 'no label', 'FASES_CON': 'no label', 'CAPACIDAD': 'no label', 'ESTADO': 'inline label', 'IDCADPAD': 'no label', 'X': 'no label', 'Y': 'no label', 'NX': 'no label', 'NY': 'no label', 'CANTIDAD': 'no label', 'LOC': 'no label', 'SYM': 'no label', 'FEC_ACT': 'no label', 'OBSERVACIO': 'no label', 'UTR': 'no label', 'FEC_INS': 'no label', 'ANIO': 'no label', 'NOOBRA': 'no label', 'IDOBRA': 'no label', 'TIPOOB': 'no label', 'DIV_2': 'no label', 'ZONA_2': 'no label', 'X1': 'no label', 'Y1': 'no label', 'X2': 'no label', 'Y2': 'no label', 'UNICO': 'no label', 'IDENTIFI_1': 'no label', 'DESCRIPCIO': 'no label', 'FASES_CON_': 'no label', 'CIRCUITO': 'no label', 'IDCADPAD_2': 'no label', 'UBICA': 'no label', 'DIRX': 'no label', 'DIRY': 'no label', 'FASES': 'no label', 'LOC_2': 'no label', 'LONG': 'no label', 'FIBRA': 'no label', 'FEC_ACT_2': 'no label', 'OBSERVAC_1': 'no label', 'ACOMETIDA': 'no label', 'FEC_INS_2': 'no label', 'TRONCAL': 'no label', 'ANIO_2': 'no label', 'NOOBRA_2': 'no label', 'IDOBRA_2': 'no label', 'TIPOOB_2': 'no label', 'GUARDA': 'no label', });
lyr_capacit_fig_5.set('fieldLabels', {'DIV': 'no label', 'ZONA': 'no label', 'NE': 'no label', 'IDENTIFICA': 'no label', 'TIPO_BANCO': 'no label', 'T': 'no label', 'TIPO_CONEX': 'no label', 'X': 'no label', 'Y': 'no label', 'IDCADPAD': 'no label', 'LOC': 'no label', 'CONTROL': 'no label', 'EQUIPO': 'header label', 'INCREM': 'no label', 'FEC_ACT': 'no label', 'OBSERVACIO': 'no label', 'FEC_INS': 'no label', 'ANIO': 'no label', 'NOOBRA': 'no label', 'IDOBRA': 'no label', 'TIPOOB': 'no label', 'DIV_2': 'no label', 'ZONA_2': 'no label', 'X1': 'no label', 'Y1': 'no label', 'X2': 'no label', 'Y2': 'no label', 'UNICO': 'no label', 'IDENTIFI_1': 'no label', 'DESCRIPCIO': 'no label', 'FASES_CON': 'no label', 'CIRCUITO': 'no label', 'IDCADPAD_2': 'no label', 'UBICA': 'no label', 'DIRX': 'no label', 'DIRY': 'no label', 'FASES': 'no label', 'LOC_2': 'no label', 'LONG': 'no label', 'FIBRA': 'no label', 'FEC_ACT_2': 'no label', 'OBSERVAC_1': 'no label', 'ACOMETIDA': 'no label', 'FEC_INS_2': 'no label', 'TRONCAL': 'no label', 'ANIO_2': 'no label', 'NOOBRA_2': 'no label', 'IDOBRA_2': 'no label', 'TIPOOB_2': 'no label', 'GUARDA': 'no label', });
lyr_eprosec_fig_6.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', 'NE': 'no label', 'CIRCUITO': 'inline label', 'TIPO_EQUIP': 'no label', 'ENLACE': 'no label', 'LAT': 'no label', 'LON': 'no label', 'OID': 'no label', 'INICIO': 'no label', 'TERMINO': 'no label', 'circuito_1': 'no label', 'EQUIPO': 'no label', 'EVENTOS': 'no label', 'MW': 'no label', 'CLIENTE': 'no label', 'ZONA': 'no label', 'FECHA': 'no label', 'COD_FALLA': 'no label', });
lyr_FUSIBLES_FIG_7.set('fieldLabels', {'DIV': 'no label', 'ZONA': 'no label', 'IDENTIFICA': 'no label', 'NE': 'no label', 'FASES_CON': 'no label', 'CANTIDAD': 'no label', 'IDCADPAD': 'no label', 'CAPACIDAD': 'no label', 'ESTADO': 'header label', 'X': 'no label', 'Y': 'no label', 'NX': 'no label', 'NY': 'no label', 'ACOMETIDA': 'no label', 'LOC': 'no label', 'TIPO': 'no label', 'VELOCIDAD': 'no label', 'TRESDISPAR': 'no label', 'FEC_ACT': 'no label', 'OBSERVACIO': 'no label', 'FEC_INS': 'no label', 'ANIO': 'no label', 'NOOBRA': 'no label', 'IDOBRA': 'no label', 'TIPOOB': 'no label', 'DIV_2': 'no label', 'ZONA_2': 'no label', 'X1': 'no label', 'Y1': 'no label', 'X2': 'no label', 'Y2': 'no label', 'UNICO': 'no label', 'IDENTIFI_1': 'no label', 'DESCRIPCIO': 'no label', 'FASES_CON_': 'no label', 'CIRCUITO': 'no label', 'IDCADPAD_2': 'no label', 'UBICA': 'no label', 'DIRX': 'no label', 'DIRY': 'no label', 'FASES': 'no label', 'LOC_2': 'no label', 'LONG': 'no label', 'FIBRA': 'no label', 'FEC_ACT_2': 'no label', 'OBSERVAC_1': 'no label', 'ACOMETIDA_': 'no label', 'FEC_INS_2': 'no label', 'TRONCAL': 'no label', 'ANIO_2': 'no label', 'NOOBRA_2': 'no label', 'IDOBRA_2': 'no label', 'TIPOOB_2': 'no label', 'GUARDA': 'no label', });
lyr_FUSIBLES_FIG_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});