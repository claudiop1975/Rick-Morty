const initialState = {
    myFavorites: [],
    allCharacters: []
}

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'ADD_FAVORITE':
            return {
                ...state,
                allCharacters: [...state.allCharacters, payload],
                myFavorites: [...state.myFavorites, payload]
            }

        case 'REMOVE_FAVORITE':
            return {
                ...state,
                myFavorites: state.myFavorites.filter(elem => elem.id !== payload),
                allCharacters: state.allCharacters.filter(elem => elem.id !== payload)
            }

        case 'FILTER':
            return {
                ...state,
                myFavorites: state.allCharacters.filter(char => char.gender === payload)
            }
        case 'ORDER':
            const orderCopy = [...state.allCharacters]
            const ordered = orderCopy.sort((a, b) => {
                if (a.id > b.id) {
                    return payload === 'Ascendente' ? 1 : -1
                }
                if (a.id < b.id) {
                    return payload === 'Ascendente' ? -1 : 1
                }
                else return 0
            })
            return {...state,
                myFavorites: ordered
            }

        default: return { ...state }
    }
}

export default rootReducer