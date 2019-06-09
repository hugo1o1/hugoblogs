import React, { Component } from 'react';
import  "./Labels.css";
import {  Link } from 'react-router-dom';

export default class Labels extends Component{
  
    render(){
        return(
            <div className= 'Labels' >
          
           <h3 style={{color:this.props.belcol}}>{'#'+this.props.labelsName}</h3>

            </div>
        )
    }
}
// Labels.propTypes ={
//     labelsName:PropTypes.string,
//     becol:PropTypes,string,
// }