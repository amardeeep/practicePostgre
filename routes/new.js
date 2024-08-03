const { Router } = require("express");
const newRouter = Router();
const { getNew, postNew } = require("../controller/newCOntroller");
newRouter.get("/", getNew);
newRouter.post("/", postNew);
module.exports = newRouter;
