import React ,{Component} from 'react';
import './Content.css'
import { HashRouter as Router, Route, Link } from "react-router-dom";
import BlogList from '../../Components/BlogList/BlogList';
import Blog from '../../Components/Blog/Blog';
import github from '../../images/github.png'
export default class Content extends Component{
    constructor(props){
        super(props);
        
    }
    render(){
        return(<div className='ContentContainer'>
                  <Route  exact path='/' component={BlogList} />
               
                <Route path ='/blogs' component ={BlogList} />
                <Route path='/introduction' component={Introduction} />
                <Route path='/contact' component={Contact} />
                <Route path= '/blogContent/:id/:name' component={Blog } />
                <footer className='footer'>
                    
                     <div className ='github'><a href= 'https://github.com/hugo1o1'><img alt='github' src={github}/>  followme@hugo1o1 </a></div>
                        
                        <h5 className='copyr'>CopyRight @2019</h5>
                </footer>
           </div>
         )
    }      
}
const Introduction =() =>{
    return <div className='intro'>Introduction</div>
   
}
const Contact =()=>{
    return <div className='blog'>Contact </div>
}