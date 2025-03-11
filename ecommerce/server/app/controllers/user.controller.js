const db = require('../models')
const User = db.users
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const https = require('http')

exports.create = async (req, res) => {
    if(!req.body.fullname || !req.body.email || !req.body.password){
        res.status(400).send({
            message: "User must have name, email and password"
        })
        return;
    }
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(req.body.password, salt)

    await User.create({
        fullname : req.body.fullname,
        email : req.body.email,
        password : hashPassword
    })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: 'Could not insert the data'
            })
        })
}

exports.findOne = async (req, res) => {
    
}

exports.auth = async (req, res) => {
    
}

exports.logout = async (req, res) => {
    
}