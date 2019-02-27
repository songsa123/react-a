import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import '../index.css';
class CommentApp extends Component {
    constructor(props){
        super(props)
        this.state={
            comments:[]
        }
    }
    handleSubmitComment(comment){
        console.log(comment,1111);
        this.state.comments.push(comment)
        this.setState({
            comments:this.state.comments
        })
        console.log(this.state.comments,6666)
    }
  render() {
    return (
      <div className='wrapper'>
        <CommentInput  onSubmit={this.handleSubmitComment.bind(this)}/>
        <CommentList comments={this.state.comments}/>
      </div>
    )
  }
}

export default CommentApp;
