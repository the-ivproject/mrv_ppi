const db = require('../config/dbconfig.js')

exports.delete_group_layer = (req, res) => {
    let id = req.params.id_group
 
    db.query('DELETE FROM group_layer WHERE id_group = ?', [id], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.redirect('/admin/addgrouplayer')
        }
    })
}


exports.delete_data_layer = (req, res) => {
    let id = req.params.id_layer
 
    db.query('DELETE FROM data_layer WHERE id_layer = ?', [id], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            db.query('DELETE FROM style_layer WHERE id_layer = ?', [id], (err, results) => {
                if (err) {
                    console.log(err)
                } else {
                    res.redirect('/admin/listlayer')
                }
            })
        }
    })
}