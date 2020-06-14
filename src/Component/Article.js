import React, { Component } from 'react';
import InputPost from './ArticleCompnont/InputPost';
import PostList from './ArticleCompnont/PostList';
import './Article.scss';
import { Pagenation } from './ArticleCompnont/Pagenation';
import postsJson from './posts.json';
class Article extends Component {
  state = {
    posts: postsJson.posts,
    writing: false,
    keyword: '',
    page: 1,
    nowView: 0,
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
    const { posts, nowView } = this.state;
    this.setState({
      posts: posts.map((post) => {
        if (post.id === id) {
          return { ...post, view: !view };
        } else if (post.id === nowView) {
          return { ...post, view: false };
        } else {
          return post;
        }
      }),
      nowView: id,
    });
  };

  render() {
    const { writing, posts, keyword, page } = this.state;
    const filteredPosts = posts.filter(
      (post) => post.title.indexOf(keyword) > -1
    );
    const start = (page - 1) * 10;
    const end = start + 10;
    const viewPosts = filteredPosts.slice(start, end);
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
              posts={viewPosts}
              onRemove={this.handleRemove}
              onUpdate={this.handleUpdate}
              onView={this.handleView}
            />
            <div className='article_footer'>
              <Pagenation posts={filteredPosts} onClick={this.handleChange} />
            </div>
          </>
        )}
      </div>
    );
  }
}

export default Article;
