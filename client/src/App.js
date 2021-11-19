import { Link, Switch, Route, BrowserRouter, useHistory } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar'
import Main from './views/Main';
import Cart from './components/Cart'
import Product from './components/Product'
import Category from './components/Category';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          {/* Home Page */}
          <Route exact path="/">
            <Main />
          </Route >

          {/* Shopping Cart */}
          <Route exact path="/cart">
            <Cart />
          </Route>
          
          {/* Category */}
          <Route exact path="/category/:category">
            <Category />
          </Route>
          
          {/* Product */}
          <Route exact path="/product/:id">
            <Product />
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
