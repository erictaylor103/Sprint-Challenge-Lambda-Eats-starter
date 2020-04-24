import React from "react";
import {Link, Route} from 'react-router-dom';
import Home from './components/Home'
import Form from './components/Form'
import styled from 'styled-components';

const MainNavContainer = styled.div`
  
  .navigation{
    box-sizing: border-box;
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    display: flex;
    justify-content: space-evenly;
    background-color: #f2f2f2;
    padding: 0 auto;
    
  }

  .navLinks{
    box-sizing: border-box;
    display: flex;
    justify-content: space-evenly;
    margin-top:23px;
    margin-left: 10px;
    
  }


`

const App = () => {
  return (
    <>
    <MainNavContainer>
      <nav className="navigation">
        <h1>Lambda Eats</h1>

        <div className="navLinks">
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
        </MainNavContainer>
    </>
  );
};
export default App;