import React from 'react';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import MainPage from './MainPage';
import ArticlesPage from './ArticlesPage';
import ArticlePage from './ArticlePage';

const App = () => {
  return (
    <BrowserRouter><div>
    {/* Navigation bar */}
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/articles">Articles</Link>
        </li>
      </ul>
    </nav>

    {/* Main content */}
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/articles" element={<ArticlesPage />} />
      <Route path="/articles/:articleId" element={<ArticlePage />} />
    </Routes>
  </div></BrowserRouter>
  );
};

export default App;
