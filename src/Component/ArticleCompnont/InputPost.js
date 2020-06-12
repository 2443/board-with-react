import React, { Component } from 'react';
import moment from 'moment';

class InputPost extends Component {
  state = { title: '', content: '' };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = (e) => {
    e.preventDefault();

    const { onCreate } = this.props;
    onCreate({
      ...this.state,
      createDate: moment().format('YY/MM/DD HH:mm'),
    });
  };

  render() {
    return (
      <div className='article_content'>
        <div className='post'>
          <input
            className='title'
            name='title'
            onChange={this.handleChange}
            value={this.state.title}
          />
        </div>
        <div className='content_box'>
          <div className='content-box'>
            <input
              className='content content-textarea'
              name='content'
              onChange={this.handleChange}
              value={this.state.content}
            />
          </div>
          <button onClick={this.handleClick}>저장</button>
        </div>
      </div>
    );
  }
}

export default InputPost;
