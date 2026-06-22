const Employee = require("../models/Employee.js");

const employeeController = {

    home: (req, res) => {
        res.render("home");
    },

    getEmployees: async (req, res) => {
        let query = {};
        if (req.query.department) {
            query.department = req.query.department;
        }
        const allemployee = await Employee.find(query);
        res.render("employees", { allemployee });
    },

    insertPage: (req, res) => {
        res.render("form");
    },

    createEmployee: async (req, res) => {
        req.body.ip = req.ip;
        await Employee.create(req.body);
        res.redirect("/getdata");
    },

    editPage: async (req, res) => {
        const data = await Employee.findById(req.params.userid);
        res.render("edit", { data });
    },

    updateEmployee: async (req, res) => {
        await Employee.findByIdAndUpdate(req.params.userid, req.body, {
            new: true
        });

        res.redirect("/getdata");
    },

    deleteEmployee: async (req, res) => {
        await Employee.findByIdAndDelete(req.params.id);
        res.redirect("/getdata");
    }

};

module.exports = employeeController;