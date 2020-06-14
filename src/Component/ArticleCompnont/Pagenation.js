import * as React from 'react';
export function Pagenation(props) {
  const { posts, onClick } = props;

  const pages = [...Array(Math.ceil(posts.length / 10))].map((v, i) => {
    const index = i + 1;
    return (
      <button
        name='page'
        onClick={onClick}
        className='text-btn'
        key={index}
        value={index}
      >
        {index}
      </button>
    );
  });
  return pages;
}
