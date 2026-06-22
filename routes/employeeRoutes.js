
const express = require("express");
const router = express.Router();

const employeeController = require("../controllers/employeeController.js");

router.get("/", employeeController.home);

router.get("/getdata", employeeController.getEmployees);

router.get("/insertdata", employeeController.insertPage);

router.post("/createdata", employeeController.createEmployee);

router.get("/edit/:userid", employeeController.editPage);

router.post("/update/:userid", employeeController.updateEmployee);

router.get("/delete/:id", employeeController.deleteEmployee);



module.exports = router;