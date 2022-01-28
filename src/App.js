import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Products } from './pages/products'
import { ProductsCadastrar } from './pages/products/cadastrar'
import { Users } from './pages/users'
import { UserCadastrar } from './pages/users/cadastrar'
import { Login } from './pages/login'
import './App.css'

function App() {
  return(
    <div>
        <Router>
          <Switch>
            <Login/>
            <Route exact path="/" component={Login} />
            <Route exact path="/product" component={Products} />
            <Route exact path="/cad_product" component={ProductsCadastrar} />
            <Route exact path="/user" component={Users} />
            <Route exact path="/cad_user" component={UserCadastrar} />
            
          </Switch>
        </Router>
    </div>
  )
}

export default App;
