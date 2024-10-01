import React from 'react';
import { Link } from 'react-router-dom';
import GoHomeButton from './GoHomeButton';  

const ArticleList = () => {
  const articles = [
    { id: 1, title: 'Статья 1' },
    { id: 2, title: 'Статья 2' },
    { id: 3, title: 'Статья 3' }
  ];

  return (
    <div>
      <h1>Список статей</h1>
      <ul>
        {articles.map(article => (
          <li key={article.id}>
            <Link to={`/articles/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
      <GoHomeButton /> {}
    </div>
  );
};

export default ArticleList;
