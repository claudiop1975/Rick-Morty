const axios = require('axios');



module.exports = getCharById = async (req, res) => {
    const { id } = req.params
    try {
        const {data } = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        let character= { 
            id: data.id, 
            image: data.image, 
            name: data.name, 
            gender: data.gender, 
            species: data.species 
        }
        res.status(200).send(character)
    }catch (err) {
        res.status(400).send(err.message)
    }
};

