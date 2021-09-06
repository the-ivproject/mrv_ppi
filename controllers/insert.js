const db = require('../config/dbconfig.js')

exports.insert_group_layer = (req, res) => {
    const {
        nama_group,
        desc_group
    } = req.body
    db.query('INSERT INTO group_layer SET ?', {
        nama_group: nama_group,
        deskripsi: desc_group
    }, async (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.redirect('/admin/addgrouplayer')
        }
    })
}

exports.insert_geojson_layer = (req, res) => {
    const {
        id_group,
        nama_layer,
        sumber_layer,
        tanggal_data,
        group_layer,
        geojson_data,
        desc_layer
    } = req.body
    db.query('INSERT INTO data_layer SET ?', {
        id_group: id_group,
        nama_layer: nama_layer,
        sumber_layer:sumber_layer,
        tanggal_data:tanggal_data,
        group_layer:group_layer,
        data_layer:geojson_data,
        desc_layer:desc_layer
    }, (err, results1) => {
        if (err) {
            console.log(err)
        } else {
            let id_layer = results1.insertId
            db.query('INSERT INTO style_layer SET ?', {
                id_layer: id_layer,
                id_group: id_group,
                nama_layer: nama_layer,
            }, (err, results2) => {
                res.redirect('/admin/addnewlayer')
            })
        }
    })
}

















