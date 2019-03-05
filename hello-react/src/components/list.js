import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './list.css'
// export default class List extends Component {
//     constructor(){
//         super();
//         this.state={
//             goodsList:['苹果','橘子','香蕉']
//         }
//     }
//   render() {
//       let {goodsList}=this.state;
//     return (
//       <div>
//         <ul className='goodsList'>
//             {
//                 goodsList.map((item,index)=>{
//                     // return <li key={index}><Link to={'/details/'+index+'/'+item}>{item}</Link></li>
//                     // query传值
//                     return <li key={index}><Link to={{pathname:'/details/',query:{id:index,name:item}}}>{item}</Link></li>
//                 })
//             }
//         </ul>
//       </div>
//     )
//   }
// }
export default class List extends Component {
  render() {
    return (
      <div>
      list
      </div>
    )
  }
}

