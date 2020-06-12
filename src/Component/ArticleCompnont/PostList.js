import React, { Component } from 'react';
import PostInfo from './PostInfo';

class PostList extends Component {
  render() {
    const { posts, onRemove, onUpdate, onView } = this.props;
    const list = posts.map((post) => (
      <PostInfo
        post={post}
        key={post.id}
        onRemove={onRemove}
        onUpdate={onUpdate}
        onView={onView}
      />
    ));
    return <div className='article_content'>{list}</div>;
  }
}

export default PostList;
