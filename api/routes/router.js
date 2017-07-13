//Expess para manejar el servidor
var oExpress = require('express');
//Obtenemos el manejador de rutas de express
var oRouter = oExpress.Router();
//Objeto controlalador de las vistas
var oViewController = require('../controller/view_controller');

var oApiController = require('../controller/api_controller');
//Ruta que renderiza el home
oRouter.get('/', oViewController.getHome);


//Ruta para registrar un nuevo usuario
oRouter.post('/api/bodega/add', oApiController.add);
oRouter.get('/api/bodega/getAll', oApiController.getAll);
oRouter.put('/api/bodega/update', oApiController.update);

//Exportamos el módulo
module.exports=oRouter;
