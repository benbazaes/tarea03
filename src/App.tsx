import { Provider } from 'react-redux'
import './App.css';
import Card from './components/card/Card';
import PokemonCard from './components/card/PokemonCard'
import Menu from './components/menu/Menu';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import store from './store';

function App() {
  return (
    
    <Provider store={store}>
      <div className="App">
      <Router>
        <Menu/>
        <Route path="/" exact>
          <PokemonCard />
        </Route>
        <Route exact path="/card">
          <Card />
        </Route>
      </Router>
      </div>
    </Provider>
    
  );
}

export default App;
