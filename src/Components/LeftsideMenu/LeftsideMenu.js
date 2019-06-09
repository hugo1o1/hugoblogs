import React, { Component } from 'react';
import './LeftsideMenu.css'
import { Link } from 'react-router-dom';
import icon from '../../images/icon.png';
import blog from '../../images/blog.png';
import contact from '../../images/contact.png';
import introduction from '../../images/Introduction.png';
import dev from '../../images/dev.png';
import top from '../../images/top.png';


export default class LeftsideMenu extends Component {
    constructor(props) {
        super();
        this.state = {
            links: [{
                name: 'blogs',
                src: blog,
                to: '/blogs',
                active: false

            }, {
                name: 'introduction',
                src: introduction,
                to: '/introduction',
                active: false

            }, {
                name: 'contactme',
                src: contact,
                to: '/contact',
                active: false

            }, {
                name: 'developer',
                src: dev,
                to: '/developer',
                active: false


            }, {
                name: 'backtotop',
                src: top,
                to: '/',
                bgc: '#ff0000',
                active: false
            }],
            open: false
        }
    }

    handleMOuse = () => {
        // console.log('this.state.open');
        this.setState({
            open: !this.state.open
        })
    };
    handleMouseEnter = (index) => {
        let newState = this.state.links;
        newState[index].active = !newState[index].active;
        this.setState({
            links: newState
        })

    }
    render() {
        return (
            <div className='LeftsideMenu'>
                <div className='myIcon' key='myIcon'><img alt='icon' src={icon} onClick={this.handleMOuse.bind(this)} /></div>
                <div className={'flexlink ' + this.state.open} key='flexlink'  >
                    {this.state.links.map((value, index) => {
                        return <div className={'div' + value.name} key={'div' + value.name}>
                            <span className={'circle ' + value.name + ' active' + value.active} ><Link to={value.to}> <img alt={value.name} src={value.src} onMouseEnter={this.handleMouseEnter.bind(this, index)} onMouseLeave={this.handleMouseEnter.bind(this, index)} /></Link></span>
                            <span className={'link link' + value.active}  ><Link to={value.to}>
                                {value.name}
                            </Link>
                            </span>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}