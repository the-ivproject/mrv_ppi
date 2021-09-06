const db = require('../config/dbconfig.js')

exports.edit_group_layer = (req, res) => {
    let id = req.params.id_group
    db.query('SELECT * FROM group_layer', (err, group_layer) => {
        db.query('SELECT * FROM group_layer WHERE id_group = ?', id, (err, group_edit) => {
            if (err) {
                console.log(err)
            } else {
                res.render('admin/editgrouplayer', {
                    title: 'Edit Group Layer',
                    group_layer: group_layer,
                    group_edit: group_edit[0]
                })
            }
        })
    })
}

exports.update_group_layer = (req, res) => {
    let newData = req.body
    let id = req.params.id_group
    db.query('UPDATE group_layer SET ? WHERE id_group = ?', [newData, id], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.redirect('/admin/addgrouplayer')
        }
    })
}

exports.edit_data_layer = (req, res) => {
    let id = req.params.id_layer
    db.query('SELECT * FROM group_layer', (err, group_layer) => {
        db.query('SELECT * FROM data_layer WHERE id_layer = ?', id, (err, layer_edit) => {
            if (err) {
                console.log(err)
            } else {
                res.render('admin/editdatalayer', {
                    title: 'Edit Data Layer',
                    group_layer: group_layer,
                    layer_edit: layer_edit[0]
                })
            }
        })
    })
}

exports.update_data_layer = (req, res) => {
    let newData = req.body
    let id = req.params.id_layer
    db.query('UPDATE data_layer SET ? WHERE id_layer = ?', [newData, id], (err, results1) => {
        if (err) {
            console.log(err)
        } else {
            let nama_layer = newData.nama_layer
            db.query('UPDATE style_layer SET nama_layer = ? WHERE id_layer = ?', [nama_layer, id], (err, results2) => {
                if (err) {
                    console.log(err)
                } else {
                    // console.log(results)
                    res.redirect('/admin/listlayer')
                }
            })
        }
    })
}

exports.update_style_layer = (req, res) => {
    let kat = req.body['kat']
    let val =req.body['val']
   
    let id = req.params.id_layer
   
    db.query('UPDATE style_layer SET tipe_style = ?, style = ? WHERE id_layer = ?', [kat, val, id], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.redirect('/admin/stylinglayer')
        }      
    })
}















