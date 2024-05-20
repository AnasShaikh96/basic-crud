const FootwearsController = require('./FootwearsController');

const router = require('express').Router();

router.post("/create", FootwearsController.createFootwearInstance)
router.get("/all", FootwearsController.getWholeInventory)


module.exports = router;
