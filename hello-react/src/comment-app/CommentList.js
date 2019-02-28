import React, { Component } from 'react'
import Comment from './Comment';
class CommentList extends Component {
    static defaultProps = {
        comments: []
      }
      handleDelComment(index){
        if(this.props.onDelComment){
          this.props.onDelComment(index)
        }
      }
  render() {
    return (
      <div>
     {this.props.comments.map((comment,i)=>
        <Comment comment={comment} key={i} index={i} onDelComment={this.handleDelComment.bind(this)}></Comment>
        )}
      </div>
    )
  }
}

export default CommentList