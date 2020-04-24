import React from "react";
import "./Form.js";
import styled from 'styled-components';

const MainContainerHome = styled.div`
    width: 50%;
    margin-left: 25%;
    margin-top: 63px;
    margin-bottom: 63px;
    background-color: #f2f2f2;
    text-align: center;  
    padding: 12px 20px;
    padding-bottom: 40px;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 10), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    
`

export default function Home() {
    return(
        <MainContainerHome>
            <h1>HOME</h1>
            <p>Welcome to Lambda Eats where Pizza is our specialty.</p>
            <h3>Business hours:</h3>
            <p>Monday - Friday</p>
            <p>12 noon - 5pm</p>
            <br/>
            <br/>
            <p>To order just click on the "Order" button on the top navigation bar.</p>
        </MainContainerHome>
    )
}