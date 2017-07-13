var oConnexion = require('./connexion.js');


var BodegaModel = {

  add : function (oData, fCallback) {
    oConnexion.query('INSERT INTO tbo_bodega SET ?', oData, fCallback);
  },
  getAll : function (fCallback) {
  oConnexion.query('SELECT * FROM tbo_bodega', fCallback);
  },
  update : function (oData, fCallback) {
  //console.log(oData);
  oConnexion.query('UPDATE tbo_bodega SET ? WHERE bod_id = ?',oData, fCallback);
}

};

module.exports = BodegaModel;
