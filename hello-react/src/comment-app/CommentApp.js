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
    componentWillMount(){
        let comments=localStorage.getItem('comments');
        if(comments){
            comments=JSON.parse(comments);
            this.setState({
                comments:comments
            })
        }

    }
    handleSubmitComment(comment){
        if(!comment) return ;
        if(!comment.username) return alert('请输入用户名');
        if(!comment.content) return alert('请输入评论内容')
        const comments=this.state.comments;
        // this.state.comments.push(comment)
        comments.push(comment)
        this.setState({
            comments:comments
        })
        localStorage.setItem('comments',JSON.stringify(comments));
    }
    handleDelComment(index){
        // console.log(index);
        const comments=this.state.comments;
        comments.splice(index,1);
        this.setState({
            comments:comments
        });
        // this._saveComments(comments)
        localStorage.setItem('comments', JSON.stringify(comments))
    }
    
  render() {
    return (
      <div className='wrapper'>
        <CommentInput  onSubmit={this.handleSubmitComment.bind(this)}/>
        <CommentList comments={this.state.comments}
        onDelComment={this.handleDelComment.bind(this)}
        />
      </div>
    )
  }
}

export default CommentApp;
