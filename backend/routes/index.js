// backend/routes/index.js
const express = require('express');
const router = express.Router();
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });

router.get('/hello/world', csrfProtection, function(req, res) {
    console.log(req);
  res.cookie('XSRF-TOKEN', req.csrfToken());
  res.send('Hello World!');
});

module.exports = router;
