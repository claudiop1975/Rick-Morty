const axios = require('axios');

module.exports = getCharDetail = async (req, res) => {
    const { id } = req.params
    try {
        const {data}= await axios(`https://rickandmortyapi.com/api/character/${id}`)
        let character= { 
            id: data.id,
            status: data.status,
            image: data.image, 
            name: data.name, 
            gender: data.gender, 
            species: data.species,
            origin: data.origin
        }
        res.status(200).send(character)
        
    } catch (err) {
        res.status(400).send(err.message)
    }
}