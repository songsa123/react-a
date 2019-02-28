import React, { Component } from 'react'

class Comment extends Component {
  constructor(){
    super()
    this.state={timeString:''}
  }
  componentWillMount(){
    this._updateTimeString()
    this._timer = setInterval(
      this._updateTimeString.bind(this),
      1000
    );   
  }
  _updateTimeString(){
    const comment=this.props.comment;
    const duration=(+Date.now()-comment.createdTime)/1000;
    this.setState({
      timeString:duration >60?`${parseInt(Math.round(duration /60))}分钟前`:`${parseInt(Math.max(duration,1))}秒前`
    })
  }
  handleDel(){
    if(this.props.onDelComment){
      this.props.onDelComment(this.props.index)
    }
  }
  componentWillUnmount() {
    clearInterval(this._timer)
  }
  render() {
    return (
        <div className='comment'>
        <div className='comment-user'>
          <span>{this.props.comment.username} </span>：
        </div>
        <p>{this.props.comment.content}</p>
        <span className='created_time'>{this.state.timeString}</span>
          <button className='del' onClick={this.handleDel.bind(this)}>×</button>
      </div>
    )
  }
}

export default Comment