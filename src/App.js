import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import './App.css';
// import PswPage from './components/Psw_page'
// import Home from './components/Home'
// import SupplierContactPage from './components/SupplierContact_page'
// import Route404 from './components/Route404'

const PswPage = lazy(() => import('./components/Psw_page'))
const Home = lazy(() => import('./components/Home'))
const SupplierContactPage = lazy(() => import('./components/SupplierContact_page'))
const Route404 = lazy(() => import('./components/Route404'))

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

            <Suspense fallback={<div>Loading...</div>}>
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
            </Suspense>
          </div>
        </Router>

      </header>
    </div>
  );
}

export default App;
