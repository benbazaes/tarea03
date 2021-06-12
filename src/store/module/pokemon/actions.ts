type base = {
    HP: number,
    Attack: number,
    Defence: number,
    SPAttack: number,
    SPDefense: number,
    Speed: number,
}

type pokemonProps = {
    id: number,
    name: string,
    type: string[],
    base: base,
}

export const addPokemonAction = (pokemon: any) => {    
    return {
        type: 'ADD_POKEMON',
        payload: pokemon,
    }
}