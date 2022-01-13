 const mysql = require('mysql')

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
                 console.log('here');
             } else {
                 res.status(401).json({
                     message: 'error in query'
                 })
             }
         })
     })
 }

 module.exports = {
     getArticles
 }