const EmpData = require("../models");

class Employer {
    constructor(){

    }
    createEmp = async(req,res)=>{
        try {
        const empinfomation = new EmpData(req.body);
        
        const employerinfo = await empinfomation.save();
        res.status(201).send(employerinfo);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    getEmp = async(req,res) =>{
        try {
            const empinfomation = await EmpData.find();
        res.status(201).send(empinfomation);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    getByIdEmp = async(req,res)=>{
        try {
            const id = req.params.id
            const empinfomation = await EmpData.findById(id);
             res.status(201).send(empinfomation);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    patchEmp = async(req,res)=>{
        try {
            const id = req.params.id;
            const dataTodo = await EmpData.findByIdAndUpdate(id,req.body,{new:true});
            res.send(dataTodo);
        } catch (error) {
            res.send(error);
        }
    }

    deleteEmp = async(req,res) =>{
        try {
            const dataTodo = await EmpData.findByIdAndDelete(req.params.id);
            res.send(dataTodo);
        } catch (error) {
            res.send(error);
        }
    }
}
module.exports = new Employer();