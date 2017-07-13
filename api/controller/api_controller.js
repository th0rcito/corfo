//var oUsuarioModel = require('../model/usuario_model');
var oBodegaModel = require('../model/bodega_model');


var ApiController = {

  add : function (req, res, next) {
    var oData = {
      bod_nombre : req.body.nombre,
      bod_direccion :  req.body.direccion
    };

    oBodegaModel.add(oData, function(oError, oRow) {
      var oRespuesta = {};
      if(oError) {
        oRespuesta.estado = 0;
        oRespuesta.msg = "Error en la inserción de datos",
        oRespuesta.descripcion = oError;
      } else {
        oRespuesta.estado = 1;
        oRespuesta.msg = "Los datos sean guardado satisfactoriamente"
      }
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(oRespuesta));
    });
  },

  getAll : function (req, res, next) {
  oBodegaModel.getAll(function(oError, oRow) {
    var oRespuesta = {};
    if(oError) {
      oRespuesta.estado = 0;
      oRespuesta.msg = "Error al obtener los datos",
      oRespuesta.descripcion = oError;
    } else {
      oRespuesta.estado = 1;
      oRespuesta.data = oRow
    }
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(oRespuesta));
  });
},
update : function (req, res, next) {

  var oData = {
    bod_nombre : req.body.nombre,
    bod_direccion :  req.body.direccion
  };

  var iId = req.body.id;

  oBodegaModel.update([oData, iId], function(oError, oRow) {
    var oRespuesta = {};
    console.info(oError);
    if(oError) {
      oRespuesta.estado = 0;
      oRespuesta.msg = "Error al actualizar los datos",
      oRespuesta.descripcion = oError;
    } else {
      oRespuesta.estado = 1;
      oRespuesta.msg = 'Actualizado correctamente'
    }
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(oRespuesta));
  });
}
};

module.exports = ApiController;
