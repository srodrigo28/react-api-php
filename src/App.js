import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Products } from './pages/products'
import { Users } from './pages/users'

function App() {
  return(
    <div>
      <Router>
        <Switch>
          <Route path="/" component={Products} />
          <Route path="/users" component={Users} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
