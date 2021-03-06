import React, { Component } from 'react';

class PostInfo extends Component {
  state = {
    enable: false,
    editing: false,
    title: '',
    content: '',
  };

  toggleContent = () => {
    const { onView, post } = this.props;
    console.log(post);
    onView(post.id, post.view || false);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleRemove = () => {
    const { onRemove, post } = this.props;
    onRemove(post.id);
  };
  handleUpdate = () => {
    const { editing, title, content } = this.state;
    const { onUpdate, post } = this.props;
    if (editing) {
      onUpdate(post.id, { title, content });
    } else {
      this.setState({
        title: post.title,
        content: post.content,
      });
    }
    this.setState({
      editing: !editing,
    });
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state !== nextState) {
      return true;
    }
    // console.log(this.props.post);
    // console.log(nextProps.post);
    // console.log(this.props.post !== nextProps.post);
    return this.props.post !== nextProps.post;
  }

  render() {
    const { editing } = this.state;
    const { title, createDate, content, view } = this.props.post;
    console.log('rendering!');
    return (
      <>
        {editing ? (
          <>
            <div className={`post${view && ' selected'}`}>
              <input
                name='title'
                onChange={this.handleChange}
                value={this.state.title}
              />
              <span>{createDate}</span>
            </div>
            <div>
              <div className='content_box'>
                <div>
                  <textarea
                    name='content'
                    className='content content-textarea'
                    onChange={this.handleChange}
                    value={this.state.content}
                  />
                </div>
                <button onClick={this.handleRemove}>삭제</button>
                <button onClick={this.handleUpdate}>저장</button>
              </div>
            </div>
          </>
        ) : (
          <>
            <button
              onClick={this.toggleContent}
              className={`post text-btn ${view && ' selected'}`}
            >
              <span>{title}</span>
              <span>{createDate}</span>
            </button>
            <div>
              {view && (
                <div className='content_box'>
                  <div className='content'>{content}</div>
                  <button onClick={this.handleRemove}>삭제</button>
                  <button onClick={this.handleUpdate}>수정</button>
                </div>
              )}
            </div>
          </>
        )}
      </>
    );
  }
}

export default PostInfo;
