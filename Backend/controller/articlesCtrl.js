 const mysql = require('mysql')
 const connection = require('./config')

 const pool = mysql.createPool({
     connectionLimit: 20,
     host: 'localhost',
     user: 'root',
     password: null,
     database: 'Vi-Motiv'
 })

 //Get All Articles
 const getArticles = async (req, res) => {
     pool.getConnection( async (err, connection) => {
         if (err) throw err

         connection.query('SELECT * from Articles', (err, rows) => {
             connection.release() //return the connection pool

             if (!err) {
                 res.header()
                 res.send(rows)
             } else {
                 res.status(401).json({
                     message: 'error in query'
                 })
             }
         })
     })
 }

 const getOneArticle = async (req, res ) => {
     pool.getConnection((err, connection) => {
         if (err) throw err

         connection.query('SELECT * from Articles WHERE id = ?', [req.params.id], (err, rows) => {
             connection.release()

             if (!err) {
                 res.send(rows)
             } else {
                 res.status(401).json({
                     message: 'problem finding the one article'
                 })
             }
         })
     })
 }
 const deleteOneArticle = async (req, res ) => {
     pool.getConnection((err, connection) => {
         if (err) throw err

         connection.query('DELETE * from Articles WHERE id = ?', [req.params.id], (err, rows) => {
             connection.release()

             if (!err) {
                 res.send(`article with the id ${req.params.id} has been deleted`)
             } else {
                 res.status(401).json({
                     message: 'problem deleting the one article'
                 })
             }
         })
     })
 }

 module.exports = {
     getArticles,
     getOneArticle, //just created
     deleteOneArticle// just created
 }