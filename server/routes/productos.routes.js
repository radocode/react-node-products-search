module.exports = app => {
  const productos = require("../controllers/productos.controller.js");

  var router = require("express").Router();

  // Retrieve all Tutorials
  router.get("/", productos.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:id", productos.findOne);

  // Update a Tutorial with id
  router.put("/:id", productos.update);

  app.use('/api/productos', router);
};
