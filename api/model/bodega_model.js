var oConnexion = require('./connexion.js');


var BodegaModel = {

  add : function (oData, fCallback) {
    oConnexion.query('INSERT INTO tbo_bodega SET ?', oData, fCallback);
  },
  getAll : function (fCallback) {
  oConnexion.query('SELECT * FROM tbo_bodega', fCallback);
  }
};

module.exports = BodegaModel;
