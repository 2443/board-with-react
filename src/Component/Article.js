import React, { Component } from 'react';
import InputPost from './ArticleCompnont/InputPost';
import PostList from './ArticleCompnont/PostList';
import './Article.scss';
class Article extends Component {
  state = {
    posts: [
      {
        content: '내용11',
        createDate: '20/06/22 11:57',
        id: 10,
        title: '제목11',
      },
      {
        content: '내용10',
        createDate: '20/06/21 11:57',
        id: 9,
        title: '제목10',
      },
      { content: '내용9', createDate: '20/06/20 11:57', id: 8, title: '제목9' },
      { content: '내용8', createDate: '20/06/19 11:57', id: 7, title: '제목8' },
      { content: '내용7', createDate: '20/06/18 11:57', id: 6, title: '제목7' },
      { content: '내용6', createDate: '20/06/17 11:57', id: 5, title: '제목6' },
      { content: '내용5', createDate: '20/06/16 11:57', id: 4, title: '제목5' },
      { content: '내용4', createDate: '20/06/15 11:57', id: 3, title: '제목4' },
      { content: '내용3', createDate: '20/06/14 11:57', id: 2, title: '제목3' },
      { content: '내용2', createDate: '20/06/13 11:57', id: 1, title: '제목2' },
      { content: '내용1', createDate: '20/06/12 11:57', id: 0, title: '제목1' },
    ],
    writing: false,
  };
  id = 11;
  handleCreate = (data) => {
    const { posts } = this.state;
    this.setState({
      posts: [{ ...data, id: this.id++ }].concat(posts),
      writing: false,
    });
  };

  handleRemove = (id) => {
    const { posts } = this.state;
    this.setState({
      posts: posts.filter((post) => post.id !== id),
    });
  };

  handleUpdate = (id, data) => {
    const { posts } = this.state;
    this.setState({
      posts: posts.map((post) =>
        post.id === id ? { ...post, ...data } : post
      ),
    });
  };

  handleToggleWriting = () => {
    this.setState({
      writing: true,
    });
  };

  handleView = (id, view) => {
    const { posts } = this.state;
    this.setState({
      posts: posts.map((post) =>
        post.id === id ? { ...post, view: !view } : { ...post, view: false }
      ),
    });
  };

  render() {
    const { writing, posts } = this.state;
    return (
      <div className='article'>
        {writing ? (
          <>
            <InputPost onCreate={this.handleCreate} />
          </>
        ) : (
          <>
            <div className='article_header'>
              <button onClick={this.handleToggleWriting}>글쓰기</button>
            </div>
            <PostList
              posts={posts}
              onRemove={this.handleRemove}
              onUpdate={this.handleUpdate}
              onView={this.handleView}
            />
            <div className='article_footer'>1 2 3 4 5</div>
          </>
        )}
      </div>
    );
  }
}

export default Article;
