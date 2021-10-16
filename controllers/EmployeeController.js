

const { error } = require('console')
const { response } = require('express')
const Employee = require('../models/Employee')

//show the list of Employee
const index = (req, res, next) => {
    Employee.find()
    .then(response=>{
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An Eror Occured!'
        })
    })
}

//SHOW SINGEL EMPLOYEE
const show = (req, res, next)=>{
    let employeeID = req.body.employeeID
    Employee.findById(employeeID)
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        response.json({
            message: 'An Error Occured'
        })
        
    })
}
//add new Employee
const store = (req, res, next)=>{
    let employee = new Employee({
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age

    })
    // if(req.file){
    //     employee.avatar = req.file.path
    // }
    employee.save()
    .then(response => {
        res.json({
            message: 'Employee Added Successfully!'
        })
    })
    .catch(error =>{
        res.json({
            message: 'An Eror Occured!'
        })
    })
}


//update an Employee
const update = (req, res, next)=>{
    let employeeID = req.body.employeeID

    let updateData ={
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    }
    Employee.findByIdAndUpdate(employeeID,{$set: updateData})
    .then(()=>{
        res.json({
            message: 'Employee Update Successfully'
        })
    })
    .catch(error =>{
        res.json({
            message : 'An Eror Occured'
        })
    })
}
// Delte Data Employee
const destroy = (req, res, next)=>{
    let employeeID = req.body.employeeID
    Employee.findByIdAndRemove(employeeID)
    .then(()=>{
        res.json({
            message: 'Employee deleted Successfully'
        })
    })
    .catch(error =>{
        res.json({
            message : 'An Error Occured'
        })
    })
    
}


module.exports = {
    index, show, store, update, destroy
}