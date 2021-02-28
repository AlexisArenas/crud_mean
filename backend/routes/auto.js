const express = require("express");
const router = express.Router();

const Auto = require("../model/auto");
router.get("/listaAutos", async(req, res) => {
    const auto = await Auto.find();
    res.send(auto)
});

router.post('/', async(req, res) => {
    const auto = new Auto({
        marca: req.body.marca,
        modelo: req.body.modelo,
        precio: req.body.precio,
        color: req.body.color
    })

    const result = await auto.save()
    res.status(200).send(result)
})

router.put('/', async(req, res) => {
    const auto = await Auto.findByIdAndUpdate(
        req.body._id, {
            marca: req.body.marca,
            modelo: req.body.modelo,
            precio: req.body.precio,
            color: req.body.color
        }, {
            new: true
        }
    )
    if (!auto) {
        res.status(400).send({ message: "No existe Auto en la Db" });
    }
    res.status(200).send(auto)
})

router.delete("/:_id", async(req, res) => {
    const auto = await Auto.findByIdAndDelete(req.params._id)
    if (!auto) {
        res.status(400).send({ message: "El Auto no existe" })
    }

    res.status(200).send(auto)

});

module.exports = router