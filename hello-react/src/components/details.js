import React, { Component } from 'react'
const querystring=require("querystring");

export default class Details extends Component {
   constructor(props){
       super(props);
       this.state={
           id:'',
           name:''
       }
       console.log(props);
       console.log(this.props.history.location.search)
   }
  render() {
//    const id=this.props.match.params.id;
//    const name=this.props.match.params.name

// const id=this.props.location.query?this.props.location.query.id:'';
// const name=this.props.location.query?this.props.location.query.name:''


    
    return (
      <div>
       
       <button onClick={this.handleReplace.bind(this)}>替换</button>
       <button onClick={this.handleBack.bind(this)}>返回</button>
       <button onClick={this.handleTo.bind(this)}>跳转</button>
      </div>
    )
  }
  handleBack(){
    this.props.history.goBack();
  }
  handleReplace(){
    this.props.history.replace("/list")
  }
  handleTo(){
    this.props.history.push({pathname:'/home',query:{id:1}})
  }
}
