let favs = []

getFav = (req, res) => {
    const { id } = req.params
    if (!id) res.status(400)
    else {
        let fav = favs.find(fav => fav.id === id)
        if (fav?.id == id) {
            res.status(200).send(fav)
        }
        res.status(404).send({ error: 'id no encontrado' })
    }

}

postFav = (req, res) => {
    const { name, species, gender, image, id }=req.body
    if ( !name|| !species|| !gender|| !image||!id ) res.status(400)
    else {
        let fav = favs.find(fav => fav.id === id)
        if (fav?.id == id) {
            res.status(400).send({error:'Favorito existente'})
        }
        favs.push({ name, species, gender, image, id })
        res.status(201).send({ success: 'Favorito agregado' })
    }
}

deleteFav = (req, res) => {
    const { id } = req.params
    if (!id) res.status(400)
    else {
        let fav = favs.findIndex(fav => fav.id === id)
        if (fav== -1) {
            res.status(404).send({ error: 'id no encontrado' })
        }
        favs.splice(fav, 1)
        res.status(200).send({ success: 'Favorito eliminado' })
    }
}

module.exports = {getFav,postFav,deleteFav};
