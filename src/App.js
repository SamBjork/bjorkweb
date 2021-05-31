import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './components/pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Customers from './components/pages/Customers';
import Products from './components/pages/Products';
import Contact from './components/pages/Contact';
import Projects from './components/pages/Projects';
import PrimaryProject from './components/pages/PrimaryProject';
import PrimaryProduct from './components/pages/PrimaryProduct';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/customers' component={Customers} />
          <Route path='/products' component={Products} />
          <Route path='/contact' component={Contact} />
          <Route path='/projects' component={Projects} />
          <Route path='/primaryproject' component={PrimaryProject} />
          <Route path='/primaryproduct' component={PrimaryProduct} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
