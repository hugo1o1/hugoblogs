import React, { Component } from 'react';
import './LeftMenu.css'
import { Avatar } from 'antd';
import 'antd/dist/antd.css'
import user from '../../images/avatar.png'
import { Menu, Icon } from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import github from '../../images/github.png'

export default class LeftMenu extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (

            <div className='LeftMenu'>
                <div className='contents'>
                    <div className='avatar'>
                        <img alt='hugoavatar' src={user} />
                        <Link to='/'><h5>万芷辉/hugo</h5></Link>
                    </div>
                    {/* 链接 */}
                    <div className='links'>
                        <ul>
                            <li><Link to='/blogs'>BLOGS</Link></li>
                            <li><Link to='/introduction'>MY INTRODUCTION</Link></li>
                            <li><Link to='/weeknotes'>WEEKNOTES</Link></li>
                            <li><Link to='/contact'>   CONTACT</Link></li>
                        </ul>
                    </div>
                    {/* github */}
                    <div className='github'><a href='https://github.com/hugo1o1'><img alt='github' src={github} />  followme@hugo1o1 </a></div>
                    {/* 版权 */}
                    <h5 className='copyr'>CopyRight @2019</h5>

                </div>

            </div>


        )
    }
}

