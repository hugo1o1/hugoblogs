import React,{Component} from 'react';
import './Clock.css'

export default class Clock extends Component{
    constructor(props){
        super(props);
        this.state=this.getTime();
    }
    componentDidMount(){
        this.setTimer();
    }
    setTimer=()=>{
        clearTimeout(this.Timeout);
        let that = this;
        this.Timeout= setTimeout(that.updateClock.bind(that),1000);
    }
    updateClock=()=>{
        this.setState(this.getTime, this.setTimer);
    }

    getTime=()=>{
        let currentTime = new Date();
        return{
            hour:currentTime.getHours(),
            min:currentTime.getMinutes(),
            sec:currentTime.getSeconds()
        }
    }
    render(){
        const {hour,min,sec}= this.state;
        return(
            <div className='clock'>
            <span className='TodoList'>TodoList</span>
            <span>
            {(hour-12)>0?`AM${hour-12}`:`+PM${hour}`}:
            {min}:
            {sec<10? `0${sec}`:sec}
            </span>
            </div>
        )
    }
}