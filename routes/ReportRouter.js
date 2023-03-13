const express = require("express");
const router = express.Router();
const reportController = require("../controllers/reportController")


router.route('/')
  .get(reportController.getReport)

module.exports = router;