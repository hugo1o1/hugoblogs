import React, { Component } from 'react';
import './Main.css';
import LeftMenu from '../../Components/LeftMenu/LeftMenu';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Content from '../Content/Content';

export  default class Main extends Component{
    
    render(){
        return(
            <div>
            <Router >
           <LeftMenu />
           <Content />
           {/* <SideTags /> */}
           </Router>
            </div>
        )
    
        }
    }
