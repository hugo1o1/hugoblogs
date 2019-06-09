import React, { Component } from 'react';
import './HeaderNav.css';
import setting from '../../images/setting.png'
export default class HeaderNav extends Component {
    
    render() {
        return (
            <div className="nav">
                <div className="navstart">
                <div className ='nav-title'>
                    <p>万芷辉的个人博客</p>
                    </div>
                    <div className="hover "><a href="/blogs">Blogs</a></div>
                    <div className="hover "><a href="/introduction">Introduction</a></div>
                    <div className="hover"><a href="/contact">Contact</a></div>
                   
                   
                    <div className="dev">
                        <span><a href="/"><img src={setting} alt="" /></a></span>
                  
                    </div>
                </div>
                </div>

                );
            }
        
}