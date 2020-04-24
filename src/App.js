import React from "react";
import {Link, Route} from 'react-router-dom';
import Home from './components/Home'
import Form from './components/Form'




const App = () => {
  return (
    <>
      <nav>
        <h1>Lambda Eats</h1>

        <div>
          <Link to='/'>Home</Link>
          <Link to='/Order' >Order</Link>
        </div>
      </nav>

        <Route exact path="/">
          <Home />
        </Route>    
        <Route path="/Order">
          <Form />
        </Route>
    </>
  );
};
export default App;