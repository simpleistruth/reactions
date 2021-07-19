import { Switch, Route} from 'react-router-dom';
import Home from './apps/home';
import Pokemon from './apps/pokemon/pokemon'

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path='/pokemon' component={Pokemon} />
      </Switch>
    </div>
  )
}

export default App;
