import React from 'react';
import { Link } from 'react-router-dom';

const ArticlesPage = () => {
  // Replace this with the actual list of blog posts fetched from your server or JSON file
  const blogPosts = [
    { id: 1, title: 'Article 1' },
    { id: 2, title: 'Article 2' },
    { id: 3, title: 'Article 3' },
    // Add more blog posts here
  ];

  return (
    <div>
      <h1>Articles Page</h1>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id}>
            <Link to={`/articles/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticlesPage;
