const express = require('express');
const router = express.Router();

const { getAllProfiles, getProfileById } = require('../controllers/profiles.controller');
// if u asked for GET /api/profiles
router.get('/', getAllProfiles);
// if u asked for GET /api/profiles/:id
router.get('/:id', getProfileById);

module.exports = router;