import React, { Component } from 'react';
import './BriefBlog.css'
import viewtimes from '../../images/viewtimes.png'
import readmore  from '../../images/readmore.png'
import {Link} from 'react-router-dom'
import axios from 'axios';
// @props{
//  blogsPath is required
//}
export default class BriefBlog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogContent: '',
            blogTitle: '',
        
            briefBlogimgsrc: ''

        }
    }
    componentWillMount(){
        // console.log(this.props);
        var url1=' https://raw.githubusercontent.com/hugo1o1/posts/master/';
          axios.get(url1 + this.props.blogsPath).then(res => {
                this.setState({
                    blogContent:res.data.slice(0,res.data.indexOf('|'))+'...',
                    briefBlogimgsrc:'https://github.com/hugo1o1/images/blob/master/posts/'+this.props.blogsPath.slice(0,this.props.blogsPath.indexOf('.md'))+'.png?raw=true',
                    blogTitle:this.props.blogsPath.slice(this.props.blogsPath.indexOf('/')+1,this.props.blogsPath.indexOf('.md'))
                })

            })
            axios.get('https://raw.githubusercontent.com/hugo1o1/posts/master/'+ this.props.blogsPath).then(res=>{
                console.log(res);
                
               this.setState({
                   updatetimes:res.headers.expires.slice(0,17)
            })
        
    })
}
    render() {
        return (
            <div  className={'BriefBlog ' + this.state.blogID}>
                <span className='bbimag'>
                    <img alt={this.state.briefBlogimgsrc} src={this.state.briefBlogimgsrc} />
                </span>
                <span className='bbContent'>
                    <h1 className='bbtitle'>{this.state.blogTitle}</h1>
                    <p className='bbcontent'>{this.state.blogContent}</p>
                </span>
                <div className='bbbottom'>
                  
                    <span className='updatetimes'>{this.state.updatetimes}</span>
                    <Link to={'/blogContent/'+this.props.blogsPath.replace('.md','')}><span className='readmore'>read more<img alt='read more' src={readmore}/></span></Link>
                    
                </div>
            </div>
        )
    }
}