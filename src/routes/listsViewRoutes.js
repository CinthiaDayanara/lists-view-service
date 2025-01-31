const express = require("express");
const { getAllLists, getListById, getListsByBoard } = require("../controllers/listsViewController");

const router = express.Router();

router.get("/", getAllLists);
router.get("/:id", getListById);
router.get("/board/:board_id", getListsByBoard);

module.exports = router;
