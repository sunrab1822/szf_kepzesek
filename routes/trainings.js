const express = require('express')
const router = express.Router()
router.get("/", (req, res) => {
    res.status(200).json({ success: true, msg: "Összes képzés" });
});
router.get("/:id", (req, res) => {
    res.status(200).json({ success: true, msg: ` ${req.params.id} id-vel rendelkezö képzés` });
});
router.post("/", (req, res) => {
    res.status(200).json({ success: true, msg: "uj képzés ltrehozasa" });
});
router.put("/:id", (req, res) => {
    res
        .status(200)
        .json({ success: true, msg: `kepzés frissitése ${req.params.id}` });
});
router.delete("/:id", (req, res) => {
    res
        .status(200)
        .json({ success: true, msg: ` képzés törlése ${req.params.id}` });
});

module.exports = router

