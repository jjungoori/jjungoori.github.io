import React from 'react';

const ArticlePage = () => {
  // Replace these with the actual data for your article
  const articleData = {
    id: 1,
    title: 'Sample Article',
    content: 'This is the content of the article.',
  };

  return (
    <div>
      <h1>{articleData.title}</h1>
      <p>{articleData.content}</p>

      <hr />

      {/* Utterances comments section */}
      <div id="utterances_container"></div>

      <script
        src="https://utteranc.es/client.js"
        repo="jjungoori/blogComments" // Replace with your GitHub username and repository
        issue-term="pathname"
        theme="github-light"
        crossOrigin="anonymous"
        async
      ></script>
    </div>
  );
};

export default ArticlePage;
