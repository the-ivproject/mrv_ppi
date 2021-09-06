const express = require('express')
const db = require('../config/dbconfig.js')

const router = express.Router()

router.get('/admin', (req, res) => {
    res.render('admin/map', {
        title: 'Peta'
    })
})

router.get('/admin/addnewlayer', (req, res) => {
    db.query('SELECT * FROM group_layer', (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.render('admin/addnewlayer', {
                title: 'Tambah Layer Baru',
                group_layer: results
            })
        }
    })
})

router.get('/admin/listlayer', (req, res) => {
    db.query('SELECT * FROM data_layer', (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.render('admin/listlayer', {
                title: 'List Layer',
                list_layer: results
            })
        }
    })
})

router.get('/admin/addgrouplayer', (req, res) => {
    db.query('SELECT * FROM group_layer', (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.render('admin/addgrouplayer',{
                title: 'Tambah Group Layer',
                group_layer:results
            })
        }
    })
})

router.get('/admin/editgrouplayer', (req, res) => {
    res.render('/admin/editgrouplayer', {
        group_layer: {},
        group_edit: {}
    })
})

router.get('/admin/editdatalayer', (req, res) => {
    res.render('/admin/editdatalayer', {
        group_layer: {},
        layer_edit: {}
    })
})

router.get('/admin/detaillayer/:id_layer', (req, res) => {
    let id = req.params.id_layer
    db.query('SELECT * FROM data_layer WHERE id_layer = ?', id, (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.render('admin/detaillayer',{
                title:'GeoJSON Properties',
                geojson: JSON.parse(results[0].data_layer)
            })
        }
    })
})

router.get('/admin/stylinglayer', (req, res) => {
    db.query('SELECT * FROM style_layer', (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.render('admin/stylinglayer', {
                title: 'Styling Layer',
                style_layer: results
            })
        }
    })
})

router.get('/admin/detailstyle/:id_layer', (req, res) => {
    let id = req.params.id_layer
    db.query('SELECT * FROM style_layer WHERE id_layer = ?', id, (err, results1) => {
        if (err) {
            console.log(err)
        } else {
            db.query('SELECT * FROM data_layer WHERE id_layer = ?', id, (err, results2) => {
                if (err) {
                    console.log(err)
                } else {
                    res.render('admin/detailstyle',{
                        title:'GeoJSON Style',
                        id_layer:id,
                        geojson: JSON.parse(results2[0].data_layer)
                    })
                }
            })
        }
    })
})

module.exports = router