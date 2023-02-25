//crear los types en archivo aparte
export const addFavorite = (personaje) => {
    return {
        type: "ADD_FAVORITE",
        payload: personaje
    }
}

export const removeFavorite = (id) => {
    return {
        type: "REMOVE_FAVORITE",
        payload: id
    }
}

export const filterCards = (status) => {
    return {
        type: "FILTER",
        payload: status
    }
}

export const orderCards = (id) => {
    return {
        type: "ORDER",
        payload: id
    }
}
