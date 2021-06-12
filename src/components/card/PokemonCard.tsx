import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { pokemonSelector } from '../../store/module/pokemon/selectors';
import { addPokemonAction } from '../../store/module/pokemon/actions';
import DataTable from '../data-table/DataTable';

const columnas:any = [
    {name: 'name', label: 'Nombre', align: 'left'},
    {name: 'type', label: 'Tipo', align: 'left'},
    {name: 'HP', label: 'HP', align: 'left'},
    {name: 'Attack', label: 'Attack', align: 'left'},
    {name: 'Defense', label: 'Defense', align: 'left'},
];

const PokemonCard = () => {
    const [pokemon, setPokemon] = React.useState<any>([]);
    const selectorPokemon: any = useSelector(pokemonSelector)

    React.useEffect(() => {
        setPokemon(selectorPokemon.pokemon)
    },[])

    return (
        <div className="card">
        <DataTable
        columns={columnas}
        body={pokemon}
        />
        
        </div>
    )
}

export default PokemonCard