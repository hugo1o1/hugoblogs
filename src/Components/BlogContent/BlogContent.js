import React, { Component } from 'react';
import './BlogContent.css';
// import axios from 'axios';
import BriefBlog from '../BriefBlog/BriefBlog'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


import Blog from '../Blog/Blog';


export default class Blogcontent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Content: ' ewfaegf'
        }
    }
    // componentDidMount() {
    //     axios.get('/blogs/CSS').then(res => {
    //         this.setState({ content: res.data })

    //     })

    // }
    render() {
        return (
            <div className='BlogContent'>
                <Router>
                    <Switch>
                        <Route exact path='/' component={Default}></Route>
                        <Route path='/search' component={Search}></Route>
                        <Route path='/CSS' component={CSS}></Route>
                        <Route path='/HTML' component={HTML}></Route>
                        {/* <Route path = '/Webpack' component={Search}></Route> */}

                    </Switch>
                </Router>
            </div>
        )
    }
}
function Search({ match }) {
    return <div>
        <div className='post-info'>
            search
        </div>
    </div>
}
function Default() {
    return <div>
        <div className='routerInfo'>
            <RouterInfo title='日常更新' />
            <SortedRule />
        </div>
        <BriefBlog/>
        <BriefBlog/>
        <BriefBlog/>

        <Blog/>

    </div>
}
function CSS() {
    return <p>CSS</p>
}
function HTML({ match }) {
    return <p>{match.path}</p>
}
function RouterInfo(props) {
    return <span className='post-info'>
        {props.title}
        <Fontimg class='sponsor' />
    </span>

}
function Fontimg(props) {
    return <span  >
        <sup className={props.class} >
            <Link to={'/' + props.class}>
                <img alt={props.class} src={sponsor} />
            </Link>
        </sup>
    </span>

}
function SortedRule() {
    return <span className='SortedRule'>
    排序 | 
    <Link to='/sortedbyhot'>热度 </Link>
    <Link to='/sortedbytime'>时间 </Link>

    
    </span>
}