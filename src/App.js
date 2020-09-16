import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import './App.css';
import PswPage from './components/Psw_page'
import Home from './components/Home'
import SupplierContactPage from './components/SupplierContact_page'
import Route404 from './components/Route404'

function App() {

  return (
    <div className="App">
      <header className="App-header">
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pswPage">PSW</Link>
            </li>
            <li>
              <Link to="/supplierContacts">Névjegyzék</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/pswPage">
          <PswPage />
          </Route>
          <Route path="/supplierContacts">
          <SupplierContactPage />
          </Route>
          <Route path="/" exact="true">
            <Home />
          </Route>
          <Route path="*">
            <Route404 />
          </Route>
        </Switch>
      </div>
    </Router>
        
        
      </header>
    </div>
  );
}

export default App;
