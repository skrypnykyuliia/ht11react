import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';


const Article = () => {
  const { id } = useParams(); 
  const navigate = useNavigate(); 

  const goBack = () => {
    navigate(-1);  
  };

  return (
    <div className="article-container"> {}
      <h1>Статья {id}</h1>
      <p>Содержание статьи {id}. </p>
      
      {}
      <button onClick={goBack} className="back-button">Назад</button>
    </div>
  );
};

export default Article;
