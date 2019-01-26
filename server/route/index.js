const express = require('express');
const articleRoutes = require('./article');

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) => {
  res.send('OK');
});

// mount article routes at /article
router.use('/article', articleRoutes);

module.exports = router;
