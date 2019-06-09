import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './BlogList.css';
import BriefBlog from '../../Components/BriefBlog/BriefBlog'
import Labels from '../../Components/Labels/Labels'
import axios from 'axios';
import { log } from 'util';

export default class BlogList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            label: [],
            blogsPath: []
          
        }
    }
    componentWillMount() {
        var that = this;
        var url = 'https://api.github.com/repos/hugo1o1/posts/contents';
        // 获取子目录文件名
        axios.get(url).then(function (response) {
            response.data.forEach(doc => {
                that.setState({
                    label: that.state.label.concat(doc.name)
                });
                // 获取每个子目录中的blog 名
                axios.get(url + doc.name).then(res => {
                    res.data.map(item => {
                        that.setState({
                            blogsPath: that.state.blogsPath.concat(item.path)
                        })

                    })
                })
            })


          



        })
    }
   



    render() {
        return (
            <div className='bloglist'>
                <h2 className='title'> BLOG POSTS</h2>
                {
                    this.state.label.map(( item) =>
                        <div key={item}>
                            <Labels labelsName={item} belcol='#0446e6' />
                            {
                                this.state.blogsPath.map(path =>{
                                   if (path.slice(0,path.indexOf('/'))==item)return <BriefBlog key={path} blogsPath = {path} />
                                    })
                            }
                        </div>
                    )
                }


               
            </div>
        )
    }

}


