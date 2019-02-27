import React, { Component } from 'react'

class CommentInput extends Component {
    constructor(props){
        super(props)
        this.state={
            username:'',
            content:''
        }      
    }
    handleUsername(event){
        this.setState({
            username:event.target.value
        })
    }
    handleContent(event){
        this.setState({
            content:event.target.value
        })
    }
    handleSubmit(){
        if(this.props.onSubmit){
            const {username,content}=this.state;
            this.props.onSubmit({username,content})
        }
        this.setState({
            content:''
        })
    }
  render() {
    return (
      <div className='comment-input'>
        <div className='comment-field'>
            <span className='userName'>用户名：</span>
                <input className='inputVal' value={this.state.username}
                onChange={this.handleUsername.bind(this)}
                ></input>
        </div>
        <div className='comment-field textareaField'>
            <span className='userName'>评论内容：</span>
                <textarea className='inputVal textareaVal'value={this.state.content}
                onChange={this.handleContent.bind(this)}
                ></textarea>
        </div>
        <div className='btn-box'>
            <button className='btn' onClick={this.handleSubmit.bind(this)}>发布</button>
        </div>
      </div>
    )
  }
}

export default CommentInput