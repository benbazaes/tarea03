import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { incrementCounterAction } from '../../store/module/counter/actions';
import { addPokemonAction } from '../../store/module/pokemon/actions';
import { pokemonSelector } from '../../store/module/pokemon/selectors';
import Button from '../button/Button';

const Card = () => {
    const history = useHistory();
    const formRef = React.useRef<HTMLFormElement | null>();
    const pokemon: any = useSelector(pokemonSelector)
    const dispatch = useDispatch()

    const handlerOnSubmit = (e:any) => {
        e.preventDefault();    
        let data: any = {};
        new FormData(formRef.current!).forEach((value, key) => (data[key] = value.toString()));
        const newPokemon = {
            id:pokemon.pokemon.length + 1 ,
            name:data.name,
            type:[data.type],
            base:{
                HP: data.HP,
                Attack: data.Attack,
                Defense: data.Defense,
                SPAttack: data.SPAttack,
                SPDefense: data.SPDefense,
                Speed: data.Speed,
            }
        }
        dispatch(addPokemonAction(newPokemon))
        history.push('/')
    }

    return (
        <form className="text-center" style={{width: '100%', maxWidth: '300px'}} ref={(ref) => (formRef.current = ref)} onSubmit={(e:any) => handlerOnSubmit(e)}>
            {/* Name input */}
            <div className="form-outline mb-4">
                <input type="text" id="name" name="name" className="form-control" required />
                <label className="form-label" htmlFor="name" style={{marginLeft: '0px'}}>Nombre</label>
                <div className="form-notch">
                    <div className="form-notch-leading" style={{width: '9px'}} />
                    <div className="form-notch-middle" style={{width: '42.4px'}} />
                    <div className="form-notch-trailing" />
                </div>
            </div>
            <div className="form-outline mb-4">
                <input type="text" id="type" name="type" className="form-control" required />
                <label className="form-label" htmlFor="name" style={{marginLeft: '0px'}}>Tipo</label>
                <div className="form-notch">
                    <div className="form-notch-leading" style={{width: '9px'}} />
                    <div className="form-notch-middle" style={{width: '42.4px'}} />
                    <div className="form-notch-trailing" />
                </div>
            </div>
            <div className="form-outline mb-4">
                <input type="number" id="name" name="HP" className="form-control" required />
                <label className="form-label" htmlFor="name" style={{marginLeft: '0px'}}>HP</label>
                <div className="form-notch">
                    <div className="form-notch-leading" style={{width: '9px'}} />
                    <div className="form-notch-middle" style={{width: '42.4px'}} />
                    <div className="form-notch-trailing" />
                </div>
            </div>
            <div className="form-outline mb-4">
                <input type="number" id="Attack" name="Attack" className="form-control" required />
                <label className="form-label" htmlFor="name" style={{marginLeft: '0px'}}>Ataque</label>
                <div className="form-notch">
                    <div className="form-notch-leading" style={{width: '9px'}} />
                    <div className="form-notch-middle" style={{width: '42.4px'}} />
                    <div className="form-notch-trailing" />
                </div>
            </div>
            <div className="form-outline mb-4">
                <input type="number" id="Defense" name="Defense" className="form-control" required />
                <label className="form-label" htmlFor="name" style={{marginLeft: '0px'}}>Defensa</label>
                <div className="form-notch">
                    <div className="form-notch-leading" style={{width: '9px'}} />
                    <div className="form-notch-middle" style={{width: '42.4px'}} />
                    <div className="form-notch-trailing" />
                </div>
            </div>
            <div className="form-outline mb-4">
                <input type="number" id="SPAttack" name="SPAttack" className="form-control" required />
                <label className="form-label" htmlFor="name" style={{marginLeft: '0px'}}>SP Ataque</label>
                <div className="form-notch">
                    <div className="form-notch-leading" style={{width: '9px'}} />
                    <div className="form-notch-middle" style={{width: '42.4px'}} />
                    <div className="form-notch-trailing" />
                </div>
            </div>
            <div className="form-outline mb-4">
                <input type="number" id="name" name="SPDefense" className="form-control" required />
                <label className="form-label" htmlFor="name" style={{marginLeft: '0px'}}>SP Defensa</label>
                <div className="form-notch">
                    <div className="form-notch-leading" style={{width: '9px'}} />
                    <div className="form-notch-middle" style={{width: '42.4px'}} />
                    <div className="form-notch-trailing" />
                </div>
            </div>
            <div className="form-outline mb-4">
                <input type="number" id="name" name="Speed" className="form-control" required />
                <label className="form-label" htmlFor="name" style={{marginLeft: '0px'}}>Velocidad</label>
                <div className="form-notch">
                    <div className="form-notch-leading" style={{width: '9px'}} />
                    <div className="form-notch-middle" style={{width: '42.4px'}} />
                    <div className="form-notch-trailing" />
                </div>
            </div>
            <button type='submit'>Ingresar</button>
        </form>
    )
}

export default Card
