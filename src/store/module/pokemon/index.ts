import PokemonJson from '../../../assets/pokemon.json';

const initialState = {
    pokemon: PokemonJson,
}

const pokemonReducer = (prevState: any = initialState, action: any) => {
    switch (action.type) {
        case 'ADD_POKEMON':
            return {
                pokemon: [...prevState.pokemon, action.payload],
            }
        case 'USER_UPDATE':
            const id = action.payload.id
            const nL = prevState.users.map((u: any) => {
                if (u.id === id) return action.payload
                return u
            })
            return {
                users: nL,
            }
        case 'USER_DELETE':
            return {
                users: [],
            }
        default:
            return prevState
    }
}

export default pokemonReducer