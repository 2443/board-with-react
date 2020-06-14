import React, { Component } from 'react';
import InputPost from './ArticleCompnont/InputPost';
import PostList from './ArticleCompnont/PostList';
import './Article.scss';
import postsJson from './posts.json';
class Article extends Component {
  state = {
    posts: postsJson.posts,
    writing: false,
    keyword: '',
  };
  id = 35;
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

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
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
    const { writing, posts, keyword } = this.state;
    const filteredPosts = posts.filter(
      (post) => post.title.indexOf(keyword) > -1
    );
    return (
      <div className='article'>
        {writing ? (
          <>
            <InputPost onCreate={this.handleCreate} />
          </>
        ) : (
          <>
            <div className='article_header'>
              <input
                name='keyword'
                onChange={this.handleChange}
                value={keyword}
              />
              <button onClick={this.handleToggleWriting}>글쓰기</button>
            </div>
            <PostList
              posts={filteredPosts}
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
