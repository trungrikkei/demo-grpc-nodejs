'use strict'

const util = require('util');
const db = require('../config/mysql');
var user    = require('../model/User');  

module.exports = {
    createUser: (req, res) => {
        var data = req.body;
        let user = {username: data.username, name: data.name, email: data.email, phone: data.phone};
        db.query("Insert into users(username, name, email, phone) value(?,?,?,?)",[user.username, user.name, user.email, user.phone], (err, response) => {
            if (err) throw err 
            res.json(response[0])
        });
    },
    // detail: (req, res) => {
    //     let sql = 'SELECT * FROM products WHERE id = ?'
    //     db.query(sql, [req.params.productId], (err, response) => {
    //         if (err) throw err
    //         res.json(response[0])
    //     })
    // },
    // update: (req, res) => {
    //     let data = req.body;
    //     let productId = req.params.productId;
    //     let sql = 'UPDATE products SET ? WHERE id = ?'
    //     db.query(sql, [data, productId], (err, response) => {
    //         if (err) throw err
    //         res.json({message: 'Update success!'})
    //     })
    // },
    // store: (req, res) => {
    //     let data = req.body;
    //     let sql = 'INSERT INTO products SET ?'
    //     db.query(sql, [data], (err, response) => {
    //         if (err) throw err
    //         res.json({message: 'Insert success!'})
    //     })
    // },
    // delete: (req, res) => {
    //     let sql = 'DELETE FROM products WHERE id = ?'
    //     db.query(sql, [req.params.productId], (err, response) => {
    //         if (err) throw err
    //         res.json({message: 'Delete success!'})
    //     })
    // }
}