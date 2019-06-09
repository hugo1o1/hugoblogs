import React, { Component } from 'react';
import './Blog.css';
import axios from 'axios';
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'



export default class Blog extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.match.params.id + '/' + this.props.match.params.name + '.md');
        this.state = {
            title: this.props.match.params.name,
            content: ''
        }

    }
    componentWillMount() {
        marked.setOptions({
            highlight: code => hljs.highlightAuto(code).value
        });
    }

    componentDidMount() {
        const url = 'https://raw.githubusercontent.com/hugo1o1/posts/master/';
        const tail = this.props.match.params.id + '/' + this.props.match.params.name + '.md';
        axios.get(url + tail).then(res => {
            this.setState({
                content: marked(res.data)
            })
        })
    }

    render() {
        return (
            <div className='blogContent'>
                <h1 className='title'>{this.state.title}</h1>
                <div className='blog' dangerouslySetInnerHTML={{ __html: this.state.content }}></div>
                {/* <div className='comment-container'></div> */}
                <button className= 'viewmore'><a href='/blogs'>view more</a></button>
               
            </div>

        )
    }
}