import React, { Component } from 'react';


import './Welcome1.css'
export default class Welcome1 extends Component {

    constructor(props) {
        super(props);
       
      
        }
    
  
    render() {
        return (
            <div>
                <p id="bounceTxt">
                {this.props.text.split("").map((value,index)=>{return(<em className={`bounce-me a${index}`}>{value}</em>)} )}
                </p>
            </div>
        )
    }

}
Welcome1.defaultProps = {
    text: `welcome `
}