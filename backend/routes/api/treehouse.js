const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const db = require('../../db/models');
const router = express.Router();
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });
router.get('/', asyncHandler(async(req,res)=>{
    res.cookie('XSRF-TOKEN', req.csrfToken());
    const treehouses = await db.Treehouse.findAll();
    res.json(treehouses);
}));

router.post('/test', function(req, res) {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    res.json({ requestBody: req.body });
  });

router.post('/', asyncHandler(async(req,res)=>{
    console.log('INSIDE OF POST',req.body)
    const {title,description,imageUrl,treeType:tree_type,owner} = req.body;
    console.log({title,description,imageUrl,tree_type,owner});
    console.log('THIS PERSON MADE THE POST', owner)
    const treehouse = await db.Treehouse.create({owner,title,description,imageUrl,tree_type});
    console.log('NEW TREE HOUSE BUILT', treehouse);
    return res.json(treehouse);
}))

router.get('/types', asyncHandler(async(req,res)=>{
    res.cookie('XSRF-TOKEN', req.csrfToken());
    const treeTypes = await db.TreeType.findAll();
    res.json(treeTypes);
}));
module.exports = router;
