const express = require('express')
const router = express.Router()

const insert = require('../controllers/insert')
const update = require('../controllers/update')
const delete1 = require('../controllers/delete')

router.post('/admin/addgrouplayer', insert.insert_group_layer)
router.post('/admin/addnewlayer', insert.insert_geojson_layer)

router.get('/admin/editgrouplayer/:id_group', update.edit_group_layer)
router.post('/admin/editgrouplayer/:id_group', update.update_group_layer)

router.get('/admin/editdatalayer/:id_layer', update.edit_data_layer)
router.post('/admin/editdatalayer/:id_layer', update.update_data_layer)
router.post('/admin/detailstyle/:id_layer', update.update_style_layer)

router.get('/admin/deletegroup/:id_group', delete1.delete_group_layer)
router.get('/admin/deletelayer/:id_layer', delete1.delete_data_layer)

module.exports = router





