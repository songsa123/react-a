import React, { Component } from 'react'

export default class Details extends Component {
   constructor(props){
       super(props);
       this.state={
           id:'',
           name:''
       }
       console.log(props)
   }
  render() {
//    const id=this.props.match.params.id;
//    const name=this.props.match.params.name

const id=this.props.location.query?this.props.location.query.id:'';
const name=this.props.location.query?this.props.location.query.name:''
    
    return (
      <div>
       <p>商品的id为：{id}</p>
       <p>商品的name为：{name}</p>
      </div>
    )
  }
}
