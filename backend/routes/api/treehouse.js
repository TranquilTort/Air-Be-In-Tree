const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const db = require('../../db/models');
const router = express.Router();

router.get('/', asyncHandler(async(req,res)=>{
    const treehouses = await db.Treehouse.findAll();
    res.json(treehouses);
}));

router.get('/types', asyncHandler(async(req,res)=>{
    const treeTypes = await db.TreeType.findAll();
    res.json(treeTypes);
}));
module.exports = router;
